import React from "react";
import "./App.css";
import { Navbar } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { DiceCalculator } from "./Components/DiceCalculator/DiceCalculator";
import {DiceAmountContextProvider} from "./Components/DiceCalculator/AttackSide/AttackDiceAmountContext";

function App() {

  return (
      <DiceAmountContextProvider>

      <div className="background">
              <Navbar />
              <DiceCalculator />
              <Footer />
          </div>
          </DiceAmountContextProvider>

  );
}

export default App;
