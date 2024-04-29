import React, { useState, createContext, useContext} from "react";

const DEFAULT_TOGGLE_STATE = false;

export interface AttackSideTogglesContextModel {
    attackHammerToggle: boolean;
    attackSwordToggle: boolean;
    attackHalfSupportToggle: boolean;
    attackFullSupportToggle: boolean;
    toggleHammer: () => void;
    toggleSword: () => void;
    toggleFullSupport: () => void;
    toggleHalfSupport: () => void;
}

export const AttackSideTogglesContext = createContext({} as AttackSideTogglesContextModel);

export const useAttackSideTogglesContext = () => {
    return useContext(AttackSideTogglesContext);
};


export const AttackSideTogglesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [attackHammerToggle, setAttackHammerToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [attackSwordToggle, setAttackSwordToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [attackFullSupportToggle, setAttackFullSupportToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [attackHalfSupportToggle, setAttackHalfSupportToggle] = useState(DEFAULT_TOGGLE_STATE);

    function toggleHammer() {
        setAttackHammerToggle(!attackHammerToggle);
    }

    function toggleSword() {
        setAttackSwordToggle(!attackSwordToggle);
    }

    function toggleFullSupport() {
        setAttackFullSupportToggle(!attackFullSupportToggle);
    }

    function toggleHalfSupport() {
        setAttackHalfSupportToggle(!attackHalfSupportToggle);
    }

    return (
        <AttackSideTogglesContext.Provider value={{
            attackHammerToggle,
            attackSwordToggle,
            attackFullSupportToggle,
            attackHalfSupportToggle,
            toggleHammer, toggleSword, toggleFullSupport, toggleHalfSupport }}>
            {children}
        </AttackSideTogglesContext.Provider>
    );
};
