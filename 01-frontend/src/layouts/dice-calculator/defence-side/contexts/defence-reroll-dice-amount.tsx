import React, {createContext, useContext, useState} from "react";

const DEFAULT_DICE_AMOUNT = 0;
const MIN_AMOUNT = 0;
const MAX_AMOUNT = 6;

export interface DefenceRerollDiceAmountContextModel {
    defenceRerollDiceAmount: number;
    incrementAmount: () => void;
    decreaseAmount: () => void;
}

export const DefenceRerollDiceAmountContext = createContext({} as DefenceRerollDiceAmountContextModel);

export const useDefenceRerollDiceContext = () => {
    return useContext(DefenceRerollDiceAmountContext);
};


export const DefenceRerollDiceAmountContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [defenceRerollDiceAmount, setAmount] = useState(DEFAULT_DICE_AMOUNT);

    function incrementAmount() {
        if (defenceRerollDiceAmount !== MAX_AMOUNT) {
            setAmount(defenceRerollDiceAmount + 1);
        }
    }

    function decreaseAmount() {
        if (defenceRerollDiceAmount !== MIN_AMOUNT) {
            setAmount(defenceRerollDiceAmount - 1);
        }
    }

    return (
        <DefenceRerollDiceAmountContext.Provider value={{ defenceRerollDiceAmount, incrementAmount, decreaseAmount }}>
            {children}
        </DefenceRerollDiceAmountContext.Provider>
    );
};
