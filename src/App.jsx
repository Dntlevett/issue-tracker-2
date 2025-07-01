import "./App.scss";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import IssuesPage from "./Pages/IssuesPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
