import React, {useContext, useEffect, useState} from "react";
import "../../Css/DiceCalculator.css";
import { AttackSide } from "./AttackSide/AttackSide";
import { Results } from "./Results/Results";
import { DefenceSide } from "./DefenceSide/DefenceSide";
import {DiceAmountContext} from "./AttackSide/AttackDiceAmount";

export const DiceCalculator = () => {
    const [result, setResult] = useState(0);

    const context = useContext(DiceAmountContext);

    console.log(context);

    const onDiceValueChanged = (value: number) => {
      setResult(value);
      console.log("Wywolanie funkcji ", result + 1);
    };

  return (
    <div className="DiceCalculator rounded-5 container-fluid">
      <div className="column">
        <AttackSide onDiceValueChanged={onDiceValueChanged} />
      </div>
      <div className="column">
        <Results  attackDiceNumber={result} defenceDiceNumber={2} attackRerollDiceNumber={2} defenceRerollDiceNumber={3}/>
      </div>
      <div className="column">
        <DefenceSide />
      </div>
    </div>
  );
};
