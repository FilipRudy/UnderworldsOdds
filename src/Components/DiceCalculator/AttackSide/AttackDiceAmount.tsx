import React, {useEffect, useState, createContext, useContext} from "react";
import "../../../Css/DiceAmount.css";
import {
    BsFillDiamondFill,
    BsFillDice1Fill,
    BsFillDice2Fill,
    BsFillDice3Fill,
    BsFillDice4Fill,
    BsFillDice5Fill, BsFillDice6Fill
} from "react-icons/bs";

export const DiceAmountContext = createContext({
    diceValue: 0, setDiceValue: (value: number) => {
        value;
    }
});
export const AttackDiceAmount = (props: {
    onDiceValueChanged: (value: number) => void
}) => {

    const [diceAmount, setDiceAmount] = useState(0);

    const context = useContext(DiceAmountContext);

    useEffect(() => {
        context.setDiceValue(diceAmount);
    }, [diceAmount]);
    const IncreaseDiceAmount = () => {
        if(diceAmount <6)
        {
            setDiceAmount(() => diceAmount + 1);
        }
    };
    const DecreaseDiceAmount = () => {
        if(diceAmount > 0)
        {
            setDiceAmount(() => diceAmount - 1);
        }
    };

    const CheckForDiceIcon = () => {
        const icons = [<BsFillDice1Fill key="1" />, <BsFillDice2Fill key="2" />,
            <BsFillDice3Fill key="3" />, <BsFillDice4Fill key="4" />,
            <BsFillDice5Fill key="5" />, <BsFillDice6Fill key="6" />,];

        if(diceAmount === 0)
        {
            return <BsFillDiamondFill/>;
        }

        return icons[diceAmount-1];
    };


    return (
            <div className="DiceAmount">
                <button className="button btn btn-primary" onClick={DecreaseDiceAmount}> -1 dice </button>
                <div className='text-align-center'> <h2>{CheckForDiceIcon()}</h2> </div>
                <button className="button btn btn-primary" onClick={IncreaseDiceAmount}> + 1 dice</button>
            </div>
    );
};
