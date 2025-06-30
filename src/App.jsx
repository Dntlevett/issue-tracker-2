import "./App.scss";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import IssuesPage from "./Pages/IssuesPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
