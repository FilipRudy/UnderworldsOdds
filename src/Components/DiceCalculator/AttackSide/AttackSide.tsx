import { DiceAmount } from "../DiceAmount";
import { RerollAmount } from "../RerollAmount";
import React from "react";
import { AttackHammerToggle } from "./AttackHammerToggle";
import { AttackSwordToggle } from "./AttackSwordToggle";
import { AttackHalfSupportToggle } from "./AttackHalfSupportToggle";
import { AttackFullSupportToggle } from "./AttackFullSupportToggle";
import {AttackDiceAmount} from "./AttackDiceAmount";

export const AttackSide = (props: {
    onDiceValueChanged: (value: number) => void
}) => {
  return (
    <div>
      <AttackDiceAmount onDiceValueChanged={props.onDiceValueChanged} />
      <RerollAmount />
      <AttackHammerToggle />
      <AttackSwordToggle />
      <AttackHalfSupportToggle />
      <AttackFullSupportToggle />
    </div>
  );
};
