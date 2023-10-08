import React, {useState} from "react";
import hammerActive from "../../../Images/DiceCalculator/AttackSide/hammerActive.png";
import hammer from "../../../Images/DiceCalculator/AttackSide/hammer.png";
import {useAttackSideTogglesContext} from "./Contexts/AttackSideTogglesContexts";
import "../../../Css/DiceCalculator/ToggleIcon.css";

export const AttackHammerToggle = () => {

    const {toggleHammer} = useAttackSideTogglesContext();

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="parent-container">      <img
            src={isActive ? hammerActive : hammer}
            className="ToggleIcon"
            alt="dice"
            onMouseOver={toggleButton}
            onMouseLeave={toggleButton}
            onClick={toggleHammer}
        />
        </div>
    );
};

export const AttackSwordToggle = () => {

    const {toggleSword} = useAttackSideTogglesContext();

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="parent-container">      <img
            src={isActive ? hammerActive : hammer}
            className="ToggleIcon"
            alt="dice"
            onMouseOver={toggleButton}
            onMouseLeave={toggleButton}
            onClick={toggleSword}
        />
        </div>
    );
};

export const AttackHalfSupportToggle = () => {
    const {toggleHalfSupport} = useAttackSideTogglesContext();

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="parent-container">      <img
            src={isActive ? hammerActive : hammer}
            className="ToggleIcon"
            alt="dice"
            onMouseOver={toggleButton}
            onMouseLeave={toggleButton}
            onClick={toggleHalfSupport}
        />
        </div>
    );
};

export const AttackFullSupportToggle = () => {
    const {toggleFullSupport} = useAttackSideTogglesContext();

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="parent-container">      <img
            src={isActive ? hammerActive : hammer}
            className="ToggleIcon"
            alt="dice"
            onMouseOver={toggleButton}
            onMouseLeave={toggleButton}
            onClick={toggleFullSupport}
        />
        </div>
    );
};
