import React from "react";
import "./App.css";
import { Navbar } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { DiceCalculator } from "./Components/DiceCalculator/DiceCalculator";
import {
    AttackSideTogglesContextProvider
} from "./Components/DiceCalculator/AttackSide/Contexts/AttackSideTogglesContexts";
import {AttackDiceAmountContextProvider} from "./Components/DiceCalculator/AttackSide/Contexts/AttackDiceAmountContext";
import {
    DefenceSideTogglesContextProvider
} from "./Components/DiceCalculator/DefenceSide/Contexts/DefenceSideTogglesContexts";
import {
    DefenceDiceAmountContextProvider
} from "./Components/DiceCalculator/DefenceSide/Contexts/DefenceDiceAmountContext";

function App() {

  return (
      <DefenceSideTogglesContextProvider>
  <AttackSideTogglesContextProvider>
        <AttackDiceAmountContextProvider>
            <DefenceDiceAmountContextProvider>
            <div className="background">
              <Navbar />
              <DiceCalculator />
              <Footer />
             </div>
            </DefenceDiceAmountContextProvider>
          </AttackDiceAmountContextProvider>
        </AttackSideTogglesContextProvider>
      </DefenceSideTogglesContextProvider>

      );
}

export default App;
