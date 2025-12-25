import "./App.scss";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import IssuesPage from "./Pages/IssuesPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

// fix urgent and feature buttons on dashboard page where statuses do not update when clicked
// fix open, progress, closed button on dashboard page

// update landing page styling and markup to match issues and dashboard page theme

// creater footer component and style

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<LandingPage />} />
          {/* Protected routes */}

          <Route
            path="/issues"
            element={
              <ProtectedRoute>
                <IssuesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
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
// 🌑 Add dark Mode toggle, using global theme
