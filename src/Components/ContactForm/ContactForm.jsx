import React, { useState } from "react";
import "./contactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, timestamp }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2>Create Ticket</h2>
      <div className="form-field">
        {/* <label>Name</label> */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <input
          type="Email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-field">
        <input
          type="Message"
          rows="4"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactForm;
