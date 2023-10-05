import React from "react";
import "../../Css/DiceAmount.css";
import diceImage from "../../Images/DiceCalculator/capture.jpg";
import {FaBeer} from "react-icons/fa";
import {BsFillDiamondFill} from "react-icons/bs";

export const RerollAmount = () => {
  return (
    <div className="DiceAmount">
      <button className="button btn btn-primary"> -1 dice </button>
       <div className='text-align-center'> <h2><BsFillDiamondFill/></h2>  </div>
      <button className="button btn btn-primary"> + 1 dice</button>
    </div>
  );
};
