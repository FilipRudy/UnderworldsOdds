import React, { useState, createContext, useContext} from "react";

const DEFAULT_TOGGLE_STATE = false;

export interface WarbandFiltersTogglesContextModel {
    chaosFactionToggle: boolean;
    destructionFactionToggle: boolean;
    orderFactionToggle: boolean;
    deathFactionToggle: boolean;
    toggleChaosFaction: () => void;
    toggleDestructionFaction: () => void;
    toggleOrderFaction: () => void;
    toggleDeathFaction: () => void;
}

export const WarbandFiltersTogglesContext = createContext({} as WarbandFiltersTogglesContextModel);

export const useWarbandFiltersTogglesContext = () => {
    return useContext(WarbandFiltersTogglesContext);
};


export const WarbandFiltersTogglesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [chaosFactionToggle, setChaosFactionToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [destructionFactionToggle, setDestructionFactionToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [orderFactionToggle, setOrderFactionToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [deathFactionToggle, setDeathFactionToggle] = useState(DEFAULT_TOGGLE_STATE);

    function toggleChaosFaction() {
        setChaosFactionToggle(!chaosFactionToggle);
    }
    function toggleDestructionFaction() {
        setDestructionFactionToggle(!destructionFactionToggle);
    }
    function toggleOrderFaction() {
        setOrderFactionToggle(!orderFactionToggle);
    }
    function toggleDeathFaction() {
        setDeathFactionToggle(!deathFactionToggle);
    }

    return (
        <WarbandFiltersTogglesContext.Provider value={{
            chaosFactionToggle,
            orderFactionToggle,
            destructionFactionToggle,
            deathFactionToggle,
            toggleChaosFaction,
            toggleOrderFaction,
            toggleDestructionFaction,
            toggleDeathFaction
        }}>
            {children}
        </WarbandFiltersTogglesContext.Provider>
    );
};
