import React from "react";
import {DefenceDiceAmount, DefenceRerollDiceAmount} from "./DefenceDiceAmount";
import {
  DefenceDodgeToggle,
  DefenceFullSupportToggle,
  DefenceHalfSupportToggle,
  DefenceShieldToggle
} from "./DefenceSideToggles";
import "../../../css/DiceCalculator/DefenceSide.css";


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
