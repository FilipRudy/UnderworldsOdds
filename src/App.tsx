import React from "react";
import "./App.css";
import { Navbar } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { DiceCalculator } from "./Components/DiceCalculator/DiceCalculator";

function App() {
  return (
    <div className="background">
      <Navbar />
      <DiceCalculator />
      <Footer />
    </div>
  );
}

export default App;
