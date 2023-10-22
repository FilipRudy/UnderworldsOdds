import React from "react";
import "../../../css/DiceCalculator/Results/Results.css";
import {WinPercentage} from "./PercentageCalculations";


export const Results = () => {
  return <div className='Results'>
    <WinPercentage />
  </div>;
};
