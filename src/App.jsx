import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePages from "./pages/HomePages";
import Explorations from "./pages/Explorations";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          <Route path="/exploration" element={<Explorations />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
