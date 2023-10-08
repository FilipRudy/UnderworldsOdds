import React, { useState, createContext, useContext} from "react";

const DEFAULT_DICE_AMOUNT = 0;
const MIN_AMOUNT = 0;
const MAX_AMOUNT = 6;

export interface AttackDiceAmountContextModel {
    attackDiceAmount: number;
    incrementAmount: () => void;
    decreaseAmount: () => void;
}

export const AttackDiceAmountContext = createContext({} as AttackDiceAmountContextModel);

export const useAttackDiceContext = () => {
    return useContext(AttackDiceAmountContext);
};


export const AttackDiceAmountContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [attackDiceAmount, setAmount] = useState(DEFAULT_DICE_AMOUNT);

    function incrementAmount() {
        if (attackDiceAmount !== MAX_AMOUNT) {
            setAmount(attackDiceAmount + 1);
        }
    }

    function decreaseAmount() {
        if (attackDiceAmount !== MIN_AMOUNT) {
            setAmount(attackDiceAmount - 1);
        }
    }

    return (
        <AttackDiceAmountContext.Provider value={{ attackDiceAmount, incrementAmount, decreaseAmount }}>
            {children}
        </AttackDiceAmountContext.Provider>
    );
};
