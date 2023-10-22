import React from "react";
import "./App.css";
import { Navbar } from "./layouts/FooterAndHeader/Header";
import { Footer } from "./layouts/FooterAndHeader/Footer";
import { DiceCalculator } from "./layouts/DiceCalculator/DiceCalculator";
import {
    AttackSideTogglesContextProvider
} from "./layouts/DiceCalculator/AttackSide/Contexts/AttackSideTogglesContexts";
import {AttackDiceAmountContextProvider} from "./layouts/DiceCalculator/AttackSide/Contexts/AttackDiceAmountContext";
import {
    DefenceSideTogglesContextProvider
} from "./layouts/DiceCalculator/DefenceSide/Contexts/DefenceSideTogglesContexts";
import {
    DefenceDiceAmountContextProvider
} from "./layouts/DiceCalculator/DefenceSide/Contexts/DefenceDiceAmountContext";
import {
    DefenceRerollDiceAmountContextProvider
} from "./layouts/DiceCalculator/DefenceSide/Contexts/DefenceRerollDiceAmount";
import {
    AttackRerollDiceAmountContextProvider
} from "./layouts/DiceCalculator/AttackSide/Contexts/AttackRerollDiceAmount";
import {WarbandsBrowserPage} from "./layouts/WarbandsBrowser/WarbandsBrowserPage";

function App() {

  return (

      <DefenceRerollDiceAmountContextProvider>
      <DefenceSideTogglesContextProvider>
          <AttackRerollDiceAmountContextProvider>
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
          </AttackRerollDiceAmountContextProvider>
      </DefenceSideTogglesContextProvider>
          </DefenceRerollDiceAmountContextProvider>

      );
}

export default App;
