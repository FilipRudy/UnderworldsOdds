import React from "react";
import "../../Css/DiceAmount.css";
import diceImage from "../../Images/DiceCalculator/capture.jpg";

export const DiceAmount = () => {
  return (
    <div className="DiceAmount">
      <button className="button btn btn-primary"> -1 dice </button>
      <img src={diceImage} alt="Dice"/>
      <button className="button btn btn-primary"> + 1 dice</button>
    </div>
  );
};
