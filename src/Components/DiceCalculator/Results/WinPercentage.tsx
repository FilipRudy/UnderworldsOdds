import React from "react";
import {useDiceContext} from "../AttackSide/AttackDiceAmountContext";

export const WinPercentage = () => {

    const { diceAmount } = useDiceContext();


    return (
    <div>
      <h3>win chance: </h3>
      <h4>{ diceAmount }%</h4>
    </div>
  );
};
