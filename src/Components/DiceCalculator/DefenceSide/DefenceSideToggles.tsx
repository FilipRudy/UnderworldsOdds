import React, {useState} from "react";
import hammerActive from "../../../Images/DiceCalculator/AttackSide/hammerActive.png";
import hammer from "../../../Images/DiceCalculator/AttackSide/hammer.png";
import "../../../Css/DiceCalculator/ToggleIcon.css";
import {useDefenceSideTogglesContext} from "./Contexts/DefenceSideTogglesContexts";


export const DefenceShieldToggle = () => {

    const {toggleShield} = useDefenceSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="parent-container">      <img
            src={hammer}
            className={isToggled ? "ToggleIcon" : "ToggleIconClicked"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleShield();
            }}
        />
        </div>
    );
};



export const DefenceDodgeToggle = () => {

    const {toggleDodge} = useDefenceSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="parent-container">      <img
            src={hammer}
            className={isToggled ? "ToggleIcon" : "ToggleIconClicked"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleDodge();
            }}
        />
        </div>
    );
};

export const DefenceFullSupportToggle = () => {

    const {toggleFullSupport} = useDefenceSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="parent-container">      <img
            src={hammer}
            className={isToggled ? "ToggleIcon" : "ToggleIconClicked"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleFullSupport();
            }}
        />
        </div>
    );
};

export const DefenceHalfSupportToggle = () => {

    const {toggleHalfSupport} = useDefenceSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="parent-container">      <img
            src={hammer}
            className={isToggled ? "ToggleIcon" : "ToggleIconClicked"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleHalfSupport();
            }}
        />
        </div>
    );
};
