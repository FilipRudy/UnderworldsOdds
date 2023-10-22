import React, { useState, createContext, useContext} from "react";

const DEFAULT_TOGGLE_STATE = false;

export interface DefenceSideTogglesContextModel {
    defenceShieldToggle: boolean;
    defenceDodgeToggle: boolean;
    defenceHalfSupportToggle: boolean;
    defenceFullSupportToggle: boolean;
    toggleShield: () => void;
    toggleDodge: () => void;
    toggleFullSupport: () => void;
    toggleHalfSupport: () => void;
}

export const DefenceSideTogglesContext = createContext({} as DefenceSideTogglesContextModel);

export const useDefenceSideTogglesContext = () => {
    return useContext(DefenceSideTogglesContext);
};


export const DefenceSideTogglesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [defenceShieldToggle, setDefenceShieldToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [defenceDodgeToggle, setDefenceDodgeToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [defenceFullSupportToggle, setDefenceFullSupportToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [defenceHalfSupportToggle, setDefenceHalfSupportToggle] = useState(DEFAULT_TOGGLE_STATE);

    function toggleShield() {
        setDefenceShieldToggle(!defenceShieldToggle);
    }

    function toggleDodge() {
        setDefenceDodgeToggle(!defenceDodgeToggle);
    }

    function toggleFullSupport() {
        setDefenceFullSupportToggle(!defenceFullSupportToggle);
    }

    function toggleHalfSupport() {
        setDefenceHalfSupportToggle(!defenceHalfSupportToggle);
    }

    return (
        <DefenceSideTogglesContext.Provider value={{
            defenceShieldToggle,
            defenceDodgeToggle,
            defenceFullSupportToggle,
            defenceHalfSupportToggle,
            toggleShield, toggleDodge, toggleFullSupport, toggleHalfSupport }}>
            {children}
        </DefenceSideTogglesContext.Provider>
    );
};
