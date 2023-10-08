import React from "react";
import {RerollAmount} from "../RerollAmount";
import {DefenceDiceAmount} from "./DefenceDiceAmount";
import {
  DefenceDodgeToggle,
  DefenceFullSupportToggle,
  DefenceHalfSupportToggle,
  DefenceShieldToggle
} from "./DefenceSideToggles";

export const DefenceSide = () => {
  return <div>
    <DefenceDiceAmount />
    <RerollAmount />
    <DefenceShieldToggle />
    <DefenceDodgeToggle />
    <DefenceHalfSupportToggle />
    <DefenceFullSupportToggle />
  </div>;
};
