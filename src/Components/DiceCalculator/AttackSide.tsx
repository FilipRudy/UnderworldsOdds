import { DiceAmount } from "./DiceAmount";
import { RerollAmount } from "./RerollAmount";
import React from "react";
import { AttackHammerToggle } from "./AttackSide/AttackHammerToggle";
import { AttackSwordToggle } from "./AttackSide/AttackSwordToggle";
import { AttackHalfSupportToggle } from "./AttackSide/AttackHalfSupportToggle";
import { AttackFullSupportToggle } from "./AttackSide/AttackFullSupportToggle";

export const AttackSide = () => {
  return (
    <div>
      <DiceAmount />
      <RerollAmount />
      <AttackHammerToggle />
      <AttackSwordToggle />
      <AttackHalfSupportToggle />
      <AttackFullSupportToggle />
    </div>
  );
};
