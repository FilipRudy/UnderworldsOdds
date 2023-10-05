import React from "react";
import {DiceAmount} from "../DiceAmount";
import {RerollAmount} from "../RerollAmount";
import {DefenceDodgeToggle} from "./DefenceDodgeToggle";
import {DefenceShieldToggle} from "./DefenceShieldToggle";
import {DefenceHalfSupportToggle} from "./DefenceHalfSupportToggle";
import {DefenceFullSupportToggle} from "./DefenceFullSupportToggle";

export const DefenceSide = () => {
  return <div>
    <DiceAmount />
    <RerollAmount />
    <DefenceShieldToggle />
    <DefenceDodgeToggle />
    <DefenceHalfSupportToggle />
    <DefenceFullSupportToggle />
  </div>;
};
