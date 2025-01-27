import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Dinamica from "./components/Dinamica";
import Autor from "./components/Autor";
import Decalogo from "./components/Decalogo";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/introduccion" element={<Intro />} />
        <Route path="/dinamica" element={<Dinamica />} />
        <Route path="/autor" element={<Autor />} />
        <Route path="/decalogo" element={<Decalogo />} />






      </Routes>
    </Router>
  );
};

export default App;
