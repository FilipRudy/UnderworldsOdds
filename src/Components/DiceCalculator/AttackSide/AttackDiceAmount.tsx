import React, {useState} from "react";
import "../../../Css/DiceAmount.css";
import {
    BsFillDiamondFill,
    BsFillDice1Fill,
    BsFillDice2Fill,
    BsFillDice3Fill,
    BsFillDice4Fill,
    BsFillDice5Fill, BsFillDice6Fill
} from "react-icons/bs";
import {useAttackDiceContext} from "./Contexts/AttackDiceAmountContext";
import {useAttackRerollDiceContext} from "./Contexts/AttackRerollDiceAmount";

export const AttackDiceAmount = () => {

    const {attackDiceAmount, incrementAmount, decreaseAmount} = useAttackDiceContext();

    const CheckForDiceIcon = () => {
        const icons = [<BsFillDice1Fill key="1" />, <BsFillDice2Fill key="2" />,
            <BsFillDice3Fill key="3" />, <BsFillDice4Fill key="4" />,
            <BsFillDice5Fill key="5" />, <BsFillDice6Fill key="6" />,];

        if(attackDiceAmount === 0)
        {
            return <BsFillDiamondFill/>;
        }

        return icons[attackDiceAmount-1];
    };


    return (
            <div className="DiceAmount">
                <button className="button btn btn-primary" onClick={decreaseAmount}> -1 dice </button>
                <div className='text-align-center'> <h2>{CheckForDiceIcon()}</h2> </div>
                <button className="button btn btn-primary" onClick={incrementAmount}> + 1 dice</button>
            </div>
    );
};


export const AttackRerollDiceAmount = () => {

    const {attackRerollDiceAmount, incrementAmount, decreaseAmount} = useAttackRerollDiceContext();

    const CheckForDiceIcon = () => {
        const icons = [<BsFillDice1Fill key="1" />, <BsFillDice2Fill key="2" />,
            <BsFillDice3Fill key="3" />, <BsFillDice4Fill key="4" />,
            <BsFillDice5Fill key="5" />, <BsFillDice6Fill key="6" />,];

        if(attackRerollDiceAmount === 0)
        {
            return <BsFillDiamondFill/>;
        }

        return icons[attackRerollDiceAmount-1];
    };

    return (
        <div className="DiceAmount">
            <button className="button btn btn-primary" onClick={decreaseAmount}> -1 dice </button>
            <div className='text-align-center'> <h2>{CheckForDiceIcon()}</h2> </div>
            <button className="button btn btn-primary" onClick={incrementAmount}> + 1 dice</button>
        </div>
    );
};

