import React, {useState} from "react";
import hammerActive from "../../../images/dice-calculator/attack-side/hammerActive.png";
import hammer from "../../../images/dice-calculator/attack-side/hammer.png";
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
