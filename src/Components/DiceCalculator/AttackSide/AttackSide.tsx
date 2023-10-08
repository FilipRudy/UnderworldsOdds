
import { RerollAmount } from "../RerollAmount";
import React from "react";
import {AttackDiceAmount} from "./AttackDiceAmount";
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
      <RerollAmount />
      <AttackHammerToggle />
      <AttackSwordToggle />
      <AttackHalfSupportToggle />
      <AttackFullSupportToggle />
    </div>
  );
};
