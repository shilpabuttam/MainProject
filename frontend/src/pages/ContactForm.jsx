import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import contact from "../assets/contact.jpg";

const ConnectionForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        description: "",
        projectType: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({ termsAccepted: false, });

    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        if (name === "termsAccepted") {
            setErrors({ ...errors, termsAccepted: !checked });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const { name, email, phone, description, projectType, termsAccepted } = formData;
        let newErrors = { termsAccepted: false };

        if (!name || !email || !phone || !description || !projectType) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!termsAccepted) {
            alert("You must accept the terms and conditions to proceed.");
            newErrors.termsAccepted = true;
            setErrors(newErrors);
            return;
        }

        const submissionData = new FormData();
        submissionData.append("access_key", "e0c9c797-bc52-4b72-8d2c-ce621113c6e3");
        submissionData.append("name", name);
        submissionData.append("email", email);
        submissionData.append("company", formData.company);
        submissionData.append("phone", phone);
        submissionData.append("message", description);  // Use "message" instead of "description"
        submissionData.append("subject", projectType); // Replace "projectType" with "subject"

        try {
            const response = await axios.post("https://api.web3forms.com/submit", submissionData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (response.data.success) {
                setResult("Email Sent Successfully");
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    description: "",
                    projectType: "",
                    termsAccepted: false,
                });
            } else {
                setResult(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("An error occurred while sending the email.");
        }
    };




    return (
        <div className="form-container">
            <img src={contact} width="80px" alt="Chat Icon" />
            <h2>CONTACT FORM</h2>
            <em>Share your requirements and we will get back to you with how we can help.</em>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                    type="text"
                    name="description"
                    placeholder="Message *"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <select name="projectType" value={formData.projectType} onChange={handleChange} required>
                    <option value="">Type of Project *</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Other">Other</option>
                </select>

                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="terms"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                    />
                    <p>I agree to the terms and conditions *</p>
                    {errors.termsAccepted ? <p className="error-text">You must accept the terms and conditions.</p> : null}
                </div>

                <button className="btn" type="submit">Send Inquiry</button>
            </form>

            <span>{result}</span>
        </div>
    );
};

export default ConnectionForm;