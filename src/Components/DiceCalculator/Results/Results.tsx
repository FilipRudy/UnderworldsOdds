import React from "react";
import {WinPercentage} from "./WinPercentage";
import "../../../Css/DiceCalculator/Results/Results.css";
import {DrawPercentage} from "./DrawPercentage";
import {CriticalPercentage} from "./CriticalPercentage";


interface props {
  attackDiceNumber: number,
  defenceDiceNumber: number,
  attackRerollDiceNumber: number,
  defenceRerollDiceNumber: number,
}
export const Results : React.FC<props> = (props: props) => {
  return <div className='Results'>
    <WinPercentage attackDiceNumber = {props.attackDiceNumber} attackRerollDiceNumber={props.attackRerollDiceNumber}
     defenceDiceNumber={props.defenceDiceNumber} defenceRerollDiceNumber={props.defenceRerollDiceNumber}/>
    <DrawPercentage/>
    <CriticalPercentage/>
  </div>;
};
