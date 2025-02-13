import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import User from "../models/users.model.js";

export const generateLastMonthInvoice = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Please provide an email" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const today = new Date();
        const lastMonth = new Date();
        lastMonth.setMonth(today.getMonth() - 1);

        // const payments = user.paymentHistory.filter(payment =>
        //     payment.paymentDate >= lastMonth && payment.paymentDate <= today
        // );

        const payments = user.paymentHistory; // realTime un Comment the above code comment this line

        if (payments.length === 0) {
            return res.status(404).json({ message: "No salary records found for the last month" });
        }

        const doc = new PDFDocument();
        const monthName = new Date().toLocaleString("en-US", { month: "short" });
        const invoicePath = path.join("invoices", `${user.firstName}_${user.lastName}_invoice_${monthName}.pdf`);
        const stream = fs.createWriteStream(invoicePath);
        doc.pipe(stream);

        // Title
        doc.font("Times-Bold").fontSize(18).text(`Salary Invoice of ${user.firstName} ${user.lastName}`, { align: "center" });
        doc.moveDown();

        // Employee Details
        doc.font("Helvetica").fontSize(14).text(`Employee: ${user.firstName} ${user.lastName}`);
        doc.text(`Email: ${user.email}`);
        doc.text(`Role: ${user.role}`);
        doc.text(`Date: ${new Date().toLocaleDateString()}`);
        doc.moveDown();

        // Table Headers
        let tableTop = 220;
        const startX = 50;
        const col1 = startX;
        const col2 = col1 + 150;
        const col3 = col2 + 150;

        doc.font("Helvetica-Bold");
        doc.text("Date", col1, tableTop);
        doc.text("Salary", col2, tableTop);
        doc.text("Bonus", col3, tableTop);
        doc.moveDown();

        // Draw table lines
        doc.moveTo(startX, tableTop + 15)
            .lineTo(col3 + 80, tableTop + 15)
            .stroke();

        doc.font("Helvetica");
        let yPosition = tableTop + 30;
        let totalSalary = 0, totalBonus = 0;

        // Table Rows
        payments.forEach(payment => {
            doc.text(payment.paymentDate.toDateString(), col1, yPosition);
            doc.text(payment.amount.toString(), col2, yPosition);
            doc.text(payment.bonus.toString(), col3, yPosition);
            yPosition += 20;

            totalSalary += payment.amount;
            totalBonus += payment.bonus;
        });

        // Draw another line after table
        doc.moveTo(startX, yPosition + 5)
            .lineTo(col3 + 80, yPosition + 5)
            .stroke();

        doc.font("Helvetica-Bold");
        doc.text("Total:", col1, yPosition + 10);
        doc.text(totalSalary.toString(), col2, yPosition + 10);
        doc.text(totalBonus.toString(), col3, yPosition + 10);

        doc.end();

        stream.on("finish", () => {
            res.download(invoicePath, `${user.firstName}_${user.lastName}_invoice_${monthName}.pdf`);
        });

    } catch(e){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message : `Error Occured : ${e.message}`})
    }
};