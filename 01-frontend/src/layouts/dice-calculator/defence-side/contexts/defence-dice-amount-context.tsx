import React, { useState, createContext, useContext} from "react";

const DEFAULT_DICE_AMOUNT = 0;
const MIN_AMOUNT = 0;
const MAX_AMOUNT = 6;

export interface DefenceDiceAmountContextModel {
    defenceDiceAmount: number;
    incrementAmount: () => void;
    decreaseAmount: () => void;
}

export const DefenceDiceAmountContext = createContext({} as DefenceDiceAmountContextModel);

export const useDefenceDiceContext = () => {
    return useContext(DefenceDiceAmountContext);
};


export const DefenceDiceAmountContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [defenceDiceAmount, setAmount] = useState(DEFAULT_DICE_AMOUNT);

    function incrementAmount() {
        if (defenceDiceAmount !== MAX_AMOUNT) {
            setAmount(defenceDiceAmount + 1);
        }
    }

    function decreaseAmount() {
        if (defenceDiceAmount !== MIN_AMOUNT) {
            setAmount(defenceDiceAmount - 1);
        }
    }

    return (
        <DefenceDiceAmountContext.Provider value={{ defenceDiceAmount, incrementAmount, decreaseAmount }}>
            {children}
        </DefenceDiceAmountContext.Provider>
    );
};
