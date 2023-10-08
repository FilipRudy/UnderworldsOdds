import React from "react";
import "../../../Css/DiceCalculator/Results/Results.css";
import {CriticalPercentage, DrawPercentage, WinPercentage} from "./PercentageCalculations";


export const Results = () => {
  return <div className='Results'>
    <WinPercentage />
    <DrawPercentage/>
    <CriticalPercentage/>
  </div>;
};
