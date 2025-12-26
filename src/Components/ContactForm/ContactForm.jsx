import React, { useState } from "react";
import "./contactForm.scss";
import { useAuth } from "../../context/AuthContext";

// set state for user inputted data
const ContactForm = () => {
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState([]);
  // post data on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const timestamp = new Date().toISOString();
    const res = await fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        // timestamp,
        status: "Open",
        tags,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2>Create Ticket</h2>
      <div className="form-field">
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
      <div className="form-field tag-options">
        <label>Tags:</label>
        <div className="pill-container">
          {["bug", "urgent", "feature"].map((tag) => (
            <label
              key={tag}
              className={`pill ${tags.includes(tag) ? "active" : ""}`}
            >
              <input
                type="checkbox"
                value={tag}
                checked={tags.includes(tag)}
                onChange={(e) => {
                  const value = e.target.value;
                  setTags((prev) =>
                    prev.includes(value)
                      ? prev.filter((t) => t !== value)
                      : [...prev, value]
                  );
                }}
              />
              {tag}
            </label>
          ))}
        </div>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactForm;
