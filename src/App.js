import React, { useState } from "react";
import Info from "../src/components/Info";
import About from "../src/components/About";
import Interests from "../src/components/Interests";
import Footer from "../src/components/Footer";
import Toggler from "../src/components/Toggler";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
    console.log(toggleDarkMode);
  }

  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      <div className="container">
        <Toggler onClick={toggleDarkMode} darkMode={darkMode} />
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
