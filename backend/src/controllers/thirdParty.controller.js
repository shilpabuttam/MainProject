import User from "../models/users.model";

export const amountUpdateForThirdParty = async (req, res) => {
    try {
        const { email, amount } = req.body;

        if (!email || !amount) {
            return res.status(400).json({ message: "Provide correct email and amount." });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.role !== "thirdParty") {
            return res.status(403).json({ message: "Access denied!" });
        }

        const previousTotal = user.paymentHistory.reduce((sum, entry) => sum + entry.amount, 0);

        const paymentEntry = {
            amount: amount,
            bonus: 0, 
            paymentDate: new Date(),
        };

        user.paymentHistory.push(paymentEntry);
        await user.save();

        const updatedTotal = previousTotal + amount;

        res.status(200).json({
            message: "Salary updated successfully for third-party!",
            totalAmount: updatedTotal,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAmountHistoryForThirdParty = async (req, res) => {
    try {
        const { email, from, to } = req.body;

        if (!email || !from || !to) {
            return res.status(400).json({ message: "Please provide email, from date, and to date" });
        }

        const fromDate = new Date(from);
        const toDate = new Date(to);

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.role !== "thirdParty") {
            return res.status(403).json({ message: "Only third-party users have salary records here." });
        }

        const filteredPayments = user.paymentHistory.filter(payment => 
            payment.paymentDate >= fromDate && payment.paymentDate <= toDate
        );

        res.status(200).json(filteredPayments);

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
