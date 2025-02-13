import React, { useRef } from 'react'

export default function contactus() {
    const contactRef = useRef(null);
    const data = {
        contact: { email: "info@company.com", phone: "+1234567890" },
      };
  return (
    <div>
        
        <section ref={contactRef} className="contact fade-in">
    <h2>Contact Us</h2>
    <p><strong>Email:</strong> {data.contact.email}</p>
    <p><strong>Phone:</strong> {data.contact.phone}</p>
  </section></div>
  )
}
