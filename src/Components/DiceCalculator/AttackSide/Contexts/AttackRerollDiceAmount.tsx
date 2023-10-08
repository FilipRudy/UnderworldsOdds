import React, {createContext, useContext, useState} from "react";

const DEFAULT_DICE_AMOUNT = 0;
const MIN_AMOUNT = 0;
const MAX_AMOUNT = 6;

export interface AttackRerollDiceAmountContextModel {
    attackRerollDiceAmount: number;
    incrementAmount: () => void;
    decreaseAmount: () => void;
}

export const AttackRerollDiceAmountContext = createContext({} as AttackRerollDiceAmountContextModel);

export const useAttackRerollDiceContext = () => {
    return useContext(AttackRerollDiceAmountContext);
};


export const AttackRerollDiceAmountContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [attackRerollDiceAmount, setAmount] = useState(DEFAULT_DICE_AMOUNT);

    function incrementAmount() {
        if (attackRerollDiceAmount !== MAX_AMOUNT) {
            setAmount(attackRerollDiceAmount + 1);
        }
    }

    function decreaseAmount() {
        if (attackRerollDiceAmount !== MIN_AMOUNT) {
            setAmount(attackRerollDiceAmount - 1);
        }
    }

    return (
        <AttackRerollDiceAmountContext.Provider value={{ attackRerollDiceAmount, incrementAmount, decreaseAmount }}>
            {children}
        </AttackRerollDiceAmountContext.Provider>
    );
};
