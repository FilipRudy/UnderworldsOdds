import React, { useState, createContext, useContext} from "react";

const DEFAULT_DICE_AMOUNT = 0;
const MIN_AMOUNT = 0;
const MAX_AMOUNT = 6;

export interface DiceAmountContextModel {
    diceAmount: number;
    incrementAmount: () => void;
    decreaseAmount: () => void;
}

export const DiceAmountContext = createContext({} as DiceAmountContextModel);

export const useDiceContext = () => {
    return useContext(DiceAmountContext);
};


export const DiceAmountContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [diceAmount, setAmount] = useState(DEFAULT_DICE_AMOUNT);

    function incrementAmount() {
        if (diceAmount !== MAX_AMOUNT) {
            setAmount(diceAmount + 1);
        }
    }

    function decreaseAmount() {
        if (diceAmount !== MIN_AMOUNT) {
            setAmount(diceAmount - 1);
        }
    }

    return (
        <DiceAmountContext.Provider value={{ diceAmount, incrementAmount, decreaseAmount }}>
            {children}
        </DiceAmountContext.Provider>
    );
};
