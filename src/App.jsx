import "./App.scss";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
