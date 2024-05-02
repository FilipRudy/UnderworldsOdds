import React, {useState} from "react";
import hammer from "../../../images/dice-calculator/attack-side/hammer.png";
import sword from "../../../images/dice-calculator/attack-side/sword.png";
import halfSupport from "../../../images/dice-calculator/attack-side/halfsupport.png";
import fullSupport from "../../../images/dice-calculator/attack-side/fullsupport.png";
import {useAttackSideTogglesContext} from "./contexts/attack-side-toggles-context";
import "../../../css/dice-calculator/toggle-icon.css";
import "../../../css/dice-calculator/attack-side.css";

export const AttackHammerToggle = () => {

    const {toggleHammer} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle' >      <img
            src={hammer}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleHammer();
            }}
        />
        </div>
    );
};

export const AttackSwordToggle = () => {

    const {toggleSword} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle'>
            <img
            src={sword}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleSword();
            }}
        />
        </div>
    );
};

export const AttackFullSupportToggle = () => {

    const {toggleFullSupport} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle' >      <img
            src={fullSupport}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleFullSupport();
            }}
        />
        </div>
    );
};

export const AttackHalfSupportToggle = () => {

    const {toggleHalfSupport} = useAttackSideTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='toggle'>      <img
            src={halfSupport}
            className={isToggled ? "ToggleIcon mx-auto d-block" : "ToggleIconClicked mx-auto d-block"}
            alt="dice"
            onClick={() => {
                toggleStatus();
                toggleHalfSupport();
            }}
        />
        </div>
    );
};
