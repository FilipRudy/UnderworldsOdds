import React, {useState} from "react";
import shield from "../../../images/dice-calculator/defence-side/shield.png";
import dodge from "../../../images/dice-calculator/defence-side/dodge.png";
import halfsupport from "../../../images/dice-calculator/defence-side/halfsupport.png";
import fullsupport from "../../../images/dice-calculator/defence-side/fullsupport.png";
import "../../../css/dice-calculator/toggle-icon.css";
import {useDefenceSideTogglesContext} from "./contexts/defence-side-toggles-contexts";


export const DefenceShieldToggle = () => {

    const {toggleShield} = useDefenceSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="parent-container">      <img
            src={shield}
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
            src={dodge}
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
            src={fullsupport}
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
            src={halfsupport}
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
