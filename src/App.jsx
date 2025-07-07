import "./App.scss";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import IssuesPage from "./Pages/IssuesPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// fix urgent and feature buttons on dashboard page where statuses do not update when clicked
// fix open, progress, closed button on dashboard page
// update nav styling to match exisiting style
// update landing page styling and markup to match issues and dashboard page theme
// issues page bug button doesnt turn red, they are all blue
//
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//  🚀 Feature Ideas to Level Up
// ✅ Status History: Track when and how a ticket's status changes.

// 📅 Sort & Filter: Add sorting by date, status, or tag priority.

// 🔍 Search Bar: Let users search tickets by keyword or email.

// 📊 Dashboard Stats: Show counts of open, in-progress, and done tickets.

// 🧠 Smart Tag Suggestions: Auto-suggest tags based on message content.

// 💾 Persistent Storage: Hook up a database like MongoDB or SQLite to save tickets across sessions.
