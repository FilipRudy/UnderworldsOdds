import React, {useState} from "react";
import hammer from "../../../Images/DiceCalculator/AttackSide/hammer.png";
import hammerActive from "../../../Images/DiceCalculator/AttackSide/hammerActive.png";
import "../../../Css/DiceCalculator/ToggleIcon.css";


export const DefenceShieldToggle = () => {

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
        />
        </div>
    );
};
