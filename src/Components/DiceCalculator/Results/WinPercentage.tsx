import React, {useContext} from "react";
import {DiceAmountContext} from "../AttackSide/AttackDiceAmount";

interface props {
    attackDiceNumber: number,
    defenceDiceNumber: number,
    attackRerollDiceNumber: number,
    defenceRerollDiceNumber: number,
}
export const WinPercentage: React.FC<props> = (props: props) => {
    const context = useContext(DiceAmountContext);

    return (
    <div>
      <h3>win chance: {props.attackDiceNumber} {props.defenceDiceNumber}</h3>
      <h4>{context.diceValue}%</h4>
    </div>
  );
};
