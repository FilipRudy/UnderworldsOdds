import React from "react";
import "../../../css/dice-calculator/results/results.css";
import {WinPercentage} from "./percentage-calculations";


export const Results = () => {
  return <div className='Results'>
    <WinPercentage />
  </div>;
};
