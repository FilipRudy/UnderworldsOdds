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
    const [chaosFactionToggle, setChaosFactionToggle] =
        useState(DEFAULT_TOGGLE_STATE), [destructionFactionToggle, setDestructionFactionToggle] =
        useState(DEFAULT_TOGGLE_STATE), [orderFactionToggle, setOrderFactionToggle] =
        useState(DEFAULT_TOGGLE_STATE), [deathFactionToggle, setDeathFactionToggle] =
        useState(DEFAULT_TOGGLE_STATE), [threeFightersToggle, setThreeFightersToggle] =
        useState(DEFAULT_TOGGLE_STATE), [fourFightersToggle, setFourFightersToggle] =
        useState(DEFAULT_TOGGLE_STATE), [fiveFightersToggle, setFiveFightersToggle] =
        useState(DEFAULT_TOGGLE_STATE), [sixFightersToggle, setSixFightersToggle] =
        useState(DEFAULT_TOGGLE_STATE), [sevenFightersToggle, setSevenFightersToggle] =
        useState(DEFAULT_TOGGLE_STATE), [shadespireSeasonToggle, setShadespireSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [nightvaultSeasonToggle, setNightvaultSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [beastgraveSeasonToggle, setBeastgraveSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [direchasmSeasonToggle, setDirechasmSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [harrowdeepSeasonToggle, setHarrowdeepSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [nethermazeSeasonToggle, setNethermazeSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [gnarlwoodSeasonToggle, setGnarlwoodSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [wyrdhollowSeasonToggle, setWyrdhollowSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE), [deathgorgeSeasonToggle, setDeathgorgeSeasonToggle] =
        useState(DEFAULT_TOGGLE_STATE);

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

  return (
    <WarbandFiltersTogglesContext.Provider
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
          toggleDeathgorgeSeason
      }}
    >
      {children}
    </WarbandFiltersTogglesContext.Provider>
  );
};
