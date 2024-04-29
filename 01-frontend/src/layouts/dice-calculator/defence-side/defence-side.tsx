import React from "react";
import {DefenceDiceAmount, DefenceRerollDiceAmount} from "./defence-dice-amount";
import {
  DefenceDodgeToggle,
  DefenceFullSupportToggle,
  DefenceHalfSupportToggle,
  DefenceShieldToggle
} from "./defence-side-toggles";
import "../../../css/dice-calculator/defence-side.css";


export const DefenceSide = () => {
  return <div>

    <div>
      <div className="defence-side-dice">
        <DefenceDiceAmount />
        <DefenceRerollDiceAmount />
      </div>
      <div className='defence-side'>

        <DefenceShieldToggle />
        <DefenceDodgeToggle />
        <DefenceHalfSupportToggle />
        <DefenceFullSupportToggle />
      </div>

    </div>

  </div>;
};
