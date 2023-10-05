
import { RerollAmount } from "../RerollAmount";
import React from "react";
import { AttackHammerToggle } from "./AttackHammerToggle";
import { AttackSwordToggle } from "./AttackSwordToggle";
import { AttackHalfSupportToggle } from "./AttackHalfSupportToggle";
import { AttackFullSupportToggle } from "./AttackFullSupportToggle";
import {AttackDiceAmount} from "./AttackDiceAmount";

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
