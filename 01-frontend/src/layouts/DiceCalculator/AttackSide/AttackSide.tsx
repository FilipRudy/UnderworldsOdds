import React from "react";
import {AttackDiceAmount, AttackRerollDiceAmount} from "./AttackDiceAmount";
import {
    AttackFullSupportToggle,
    AttackHalfSupportToggle,
    AttackHammerToggle,
    AttackSwordToggle
} from "./AttackSideToggles";
import "../../../css/DiceCalculator/AttackSide.css";


export const AttackSide = () => {
  return (
    <div >
        <div className="attack-side-dice">

            <AttackDiceAmount/>
            <AttackRerollDiceAmount />
        </div>
        <div className="attack-side">
            <AttackHammerToggle />
            <AttackSwordToggle />
            <AttackHalfSupportToggle />
            <AttackFullSupportToggle />
        </div>
    </div>
  );
};
