import React from "react";
import {WinPercentage} from "./WinPercentage";
import "../../../Css/DiceCalculator/Results/Results.css";
import {DrawPercentage} from "./DrawPercentage";
import {CriticalPercentage} from "./CriticalPercentage";


export const Results = () => {
  return <div className='Results'>
    <WinPercentage />
    <DrawPercentage/>
    <CriticalPercentage/>
  </div>;
};
