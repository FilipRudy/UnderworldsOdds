import React, {useState} from "react";
import "./App.css";
import { Navbar } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { DiceCalculator } from "./Components/DiceCalculator/DiceCalculator";
import {DiceAmountContext} from "./Components/DiceCalculator/AttackSide/AttackDiceAmount";

function App() {
    const [diceValue, setDiceValue] = useState(0);
  return (
      <DiceAmountContext.Provider value={{diceValue, setDiceValue}}>
          <div className="background">
              <Navbar />
              <DiceCalculator />
              <Footer />
          </div>
      </DiceAmountContext.Provider>

  );
}

export default App;
