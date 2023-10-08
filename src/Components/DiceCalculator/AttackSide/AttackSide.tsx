
import React from "react";
import {AttackDiceAmount, AttackRerollDiceAmount} from "./AttackDiceAmount";
import {
    AttackFullSupportToggle,
    AttackHalfSupportToggle,
    AttackHammerToggle,
    AttackSwordToggle
} from "./AttackSideToggles";

export const AttackSide = () => {
  return (
    <div>
      <AttackDiceAmount/>
      <AttackRerollDiceAmount />
      <AttackHammerToggle />
      <AttackSwordToggle />
      <AttackHalfSupportToggle />
      <AttackFullSupportToggle />
    </div>
  );
};
