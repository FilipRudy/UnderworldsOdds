import React from "react";
import {AttackDiceAmount, AttackRerollDiceAmount} from "./attack-dice-amount";
import {
    AttackFullSupportToggle,
    AttackHalfSupportToggle,
    AttackHammerToggle,
    AttackSwordToggle
} from "./attack-side-toggles";
import "../../../css/dice-calculator/attack-side.css";


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
