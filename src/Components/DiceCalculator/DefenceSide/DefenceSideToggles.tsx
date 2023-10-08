import React, {useState} from "react";
import hammerActive from "../../../Images/DiceCalculator/AttackSide/hammerActive.png";
import hammer from "../../../Images/DiceCalculator/AttackSide/hammer.png";
import "../../../Css/DiceCalculator/ToggleIcon.css";
import {useDefenceSideTogglesContext} from "./Contexts/DefenceSideTogglesContexts";


export const DefenceShieldToggle = () => {

    const {toggleShield} = useDefenceSideTogglesContext();

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
            onClick={toggleShield}
        />
        </div>
    );
};


export const DefenceDodgeToggle = () => {
    const {toggleDodge} = useDefenceSideTogglesContext();

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
            onClick={toggleDodge}
        />
        </div>
    );
};

export const DefenceFullSupportToggle = () => {
    const {toggleFullSupport} = useDefenceSideTogglesContext();

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
export const DefenceHalfSupportToggle = () => {
    const {toggleHalfSupport} = useDefenceSideTogglesContext();

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
