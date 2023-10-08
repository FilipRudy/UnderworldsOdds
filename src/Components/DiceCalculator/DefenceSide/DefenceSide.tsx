import React from "react";
import {DefenceDiceAmount, DefenceRerollDiceAmount} from "./DefenceDiceAmount";
import {
  DefenceDodgeToggle,
  DefenceFullSupportToggle,
  DefenceHalfSupportToggle,
  DefenceShieldToggle
} from "./DefenceSideToggles";

export const DefenceSide = () => {
  return <div>
    <DefenceDiceAmount />
    <DefenceRerollDiceAmount />
    <DefenceShieldToggle />
    <DefenceDodgeToggle />
    <DefenceHalfSupportToggle />
    <DefenceFullSupportToggle />
  </div>;
};
