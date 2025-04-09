import "./App.scss";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import IssuesPage from "./Pages/IssuesPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
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
