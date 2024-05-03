import React, { useState, createContext, useContext } from "react";

const DEFAULT_TOGGLE_STATE = false;

export interface WarbandFiltersTogglesContextModel {
    chaosFactionToggle: boolean;
    destructionFactionToggle: boolean;
    orderFactionToggle: boolean;
    deathFactionToggle: boolean;
    threeFightersToggle: boolean;
    fourFightersToggle: boolean;
    fiveFightersToggle: boolean;
    sixFightersToggle: boolean;
    sevenFightersToggle: boolean;
    shadespireSeasonToggle: boolean;
    nightvaultSeasonToggle: boolean;
    beastgraveSeasonToggle: boolean;
    direchasmSeasonToggle: boolean;
    harrowdeepSeasonToggle: boolean;
    nethermazeSeasonToggle: boolean;
    gnarlwoodSeasonToggle: boolean;
    wyrdhollowSeasonToggle: boolean;
    deathgorgeSeasonToggle: boolean;
    toggleChaosFaction: () => void;
    toggleDestructionFaction: () => void;
    toggleOrderFaction: () => void;
    toggleDeathFaction: () => void;
    toggleThreeFighters: () => void;
    toggleFourFighters: () => void;
    toggleFiveFighters: () => void;
    toggleSixFighters: () => void;
    toggleSevenFighters: () => void;
    toggleShadespireSeason: () => void;
    toggleNightvaultSeason: () => void;
    toggleBeastgraveSeason: () => void;
    toggleDirechasmSeason: () => void;
    toggleHarrowdeepSeason: () => void;
    toggleNethermazeSeason: () => void;
    toggleGnarlwoodSeason: () => void;
    toggleWyrdhollowSeason: () => void;
    toggleDeathgorgeSeason: () => void;
    clearAllFilters: () => void;
}

export const WarbandFiltersTogglesContext = createContext(
    {} as WarbandFiltersTogglesContextModel,
);

export const useWarbandFiltersTogglesContext = () => {
    return useContext(WarbandFiltersTogglesContext);
};

export const WarbandFiltersTogglesContextProvider = ({
                                                         children,
                                                     }: {
    children: React.ReactNode;
}) => {
    const [key, setKey] = useState(0);

    const [chaosFactionToggle, setChaosFactionToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [destructionFactionToggle, setDestructionFactionToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [orderFactionToggle, setOrderFactionToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [deathFactionToggle, setDeathFactionToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [threeFightersToggle, setThreeFightersToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [fourFightersToggle, setFourFightersToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [fiveFightersToggle, setFiveFightersToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [sixFightersToggle, setSixFightersToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [sevenFightersToggle, setSevenFightersToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [shadespireSeasonToggle, setShadespireSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [nightvaultSeasonToggle, setNightvaultSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [beastgraveSeasonToggle, setBeastgraveSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [direchasmSeasonToggle, setDirechasmSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [harrowdeepSeasonToggle, setHarrowdeepSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [nethermazeSeasonToggle, setNethermazeSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [gnarlwoodSeasonToggle, setGnarlwoodSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [wyrdhollowSeasonToggle, setWyrdhollowSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);
    const [deathgorgeSeasonToggle, setDeathgorgeSeasonToggle] = useState(DEFAULT_TOGGLE_STATE);

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
    function toggleThreeFighters() {
        setThreeFightersToggle(!threeFightersToggle);
    }
    function toggleFourFighters() {
        setFourFightersToggle(!fourFightersToggle);
    }
    function toggleFiveFighters() {
        setFiveFightersToggle(!fiveFightersToggle);
    }
    function toggleSixFighters() {
        setSixFightersToggle(!sixFightersToggle);
    }
    function toggleSevenFighters() {
        setSevenFightersToggle(!sevenFightersToggle);
    }
    function toggleShadespireSeason() {
        setShadespireSeasonToggle(!shadespireSeasonToggle);
    }
    function toggleNightvaultSeason() {
        setNightvaultSeasonToggle(!nightvaultSeasonToggle);
    }
    function toggleBeastgraveSeason() {
        setBeastgraveSeasonToggle(!beastgraveSeasonToggle);
    }
    function toggleDirechasmSeason() {
        setDirechasmSeasonToggle(!direchasmSeasonToggle);
    }
    function toggleHarrowdeepSeason() {
        setHarrowdeepSeasonToggle(!harrowdeepSeasonToggle);
    }
    function toggleNethermazeSeason() {
        setNethermazeSeasonToggle(!nethermazeSeasonToggle);
    }
    function toggleGnarlwoodSeason() {
        setGnarlwoodSeasonToggle(!gnarlwoodSeasonToggle);
    }
    function toggleWyrdhollowSeason() {
        setWyrdhollowSeasonToggle(!wyrdhollowSeasonToggle);
    }
    function toggleDeathgorgeSeason() {
        setDeathgorgeSeasonToggle(!deathgorgeSeasonToggle);
    }

    function clearAllFilters() {
        setChaosFactionToggle(DEFAULT_TOGGLE_STATE);
        setDestructionFactionToggle(DEFAULT_TOGGLE_STATE);
        setOrderFactionToggle(DEFAULT_TOGGLE_STATE);
        setDeathFactionToggle(DEFAULT_TOGGLE_STATE);
        setThreeFightersToggle(DEFAULT_TOGGLE_STATE);
        setFourFightersToggle(DEFAULT_TOGGLE_STATE);
        setFiveFightersToggle(DEFAULT_TOGGLE_STATE);
        setSixFightersToggle(DEFAULT_TOGGLE_STATE);
        setSevenFightersToggle(DEFAULT_TOGGLE_STATE);
        setShadespireSeasonToggle(DEFAULT_TOGGLE_STATE);
        setNightvaultSeasonToggle(DEFAULT_TOGGLE_STATE);
        setBeastgraveSeasonToggle(DEFAULT_TOGGLE_STATE);
        setDirechasmSeasonToggle(DEFAULT_TOGGLE_STATE);
        setHarrowdeepSeasonToggle(DEFAULT_TOGGLE_STATE);
        setNethermazeSeasonToggle(DEFAULT_TOGGLE_STATE);
        setGnarlwoodSeasonToggle(DEFAULT_TOGGLE_STATE);
        setWyrdhollowSeasonToggle(DEFAULT_TOGGLE_STATE);
        setDeathgorgeSeasonToggle(DEFAULT_TOGGLE_STATE);
        setKey((prevKey) => prevKey + 1);
    }

    return (

        <WarbandFiltersTogglesContext.Provider
            key={key}

            value={{
                chaosFactionToggle,
                orderFactionToggle,
                destructionFactionToggle,
                deathFactionToggle,
                threeFightersToggle,
                fourFightersToggle,
                fiveFightersToggle,
                sixFightersToggle,
                sevenFightersToggle,
                shadespireSeasonToggle,
                nightvaultSeasonToggle,
                beastgraveSeasonToggle,
                direchasmSeasonToggle,
                harrowdeepSeasonToggle,
                nethermazeSeasonToggle,
                gnarlwoodSeasonToggle,
                wyrdhollowSeasonToggle,
                deathgorgeSeasonToggle,
                toggleChaosFaction,
                toggleOrderFaction,
                toggleDestructionFaction,
                toggleDeathFaction,
                toggleThreeFighters,
                toggleFourFighters,
                toggleFiveFighters,
                toggleSixFighters,
                toggleSevenFighters,
                toggleShadespireSeason,
                toggleNightvaultSeason,
                toggleBeastgraveSeason,
                toggleDirechasmSeason,
                toggleHarrowdeepSeason,
                toggleNethermazeSeason,
                toggleGnarlwoodSeason,
                toggleWyrdhollowSeason,
                toggleDeathgorgeSeason,
                clearAllFilters,
            }}
        >
            {children}
        </WarbandFiltersTogglesContext.Provider>
    );
};
