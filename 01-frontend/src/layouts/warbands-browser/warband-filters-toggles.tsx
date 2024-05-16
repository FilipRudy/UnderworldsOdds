import React, { useState } from "react";
import orderIcon from "../../images/warbands-browser/warband-filters/order-icon.png";
import chaosIcon from "../../images/warbands-browser/warband-filters/chaos-icon.png";
import destructionIcon from "../../images/warbands-browser/warband-filters/destruction-icon.png";
import deathIcon from "../../images/warbands-browser/warband-filters/death-icon.png";
import { useWarbandFiltersTogglesContext } from "./contexts/warband-filters-toggles-context";

export const ChaosFactionToggle = () => {
  const { toggleChaosFaction } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleChaosFaction();
      }}
    >
      <img
        className="whuicon-lg"
        title="Universal"
        alt="Universal"
        src={chaosIcon}
      />
    </button>
  );
};

export const OrderFactionToggle = () => {
  const { toggleOrderFaction } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleOrderFaction();
      }}
    >
      <img
        className="whuicon-lg"
        title="Universal"
        alt="Universal"
        src={orderIcon}
      />
    </button>
  );
};

export const DestructionFactionToggle = () => {
  const { toggleDestructionFaction } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleDestructionFaction();
      }}
    >
      <img
        className="whuicon-lg"
        title="Universal"
        alt="Universal"
        src={destructionIcon}
      />
    </button>
  );
};

export const DeathFactionToggle = () => {
  const { toggleDeathFaction } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleDeathFaction();
      }}
    >
      <img
        className="whuicon-lg"
        title="Universal"
        alt="Universal"
        src={deathIcon}
      />
    </button>
  );
};
export const ThreeFightersToggle = () => {
  const { toggleThreeFighters } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleThreeFighters();
      }}
    >
      3
    </button>
  );
};

export const FourFightersToggle = () => {
  const { toggleFourFighters } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleFourFighters();
      }}
    >
      4
    </button>
  );
};

export const FiveFightersToggle = () => {
  const { toggleFiveFighters } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleFiveFighters();
      }}
    >
      5
    </button>
  );
};

export const SixFightersToggle = () => {
  const { toggleSixFighters } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleSixFighters();
      }}
    >
      6
    </button>
  );
};

export const SevenFightersToggle = () => {
  const { toggleSevenFighters } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleSevenFighters();
      }}
    >
      7+
    </button>
  );
};
export const ShadespireSeasonToggle = () => {
  const { toggleShadespireSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleShadespireSeason();
      }}
    >
      Shadespire
    </button>
  );
};
export const NightvaultSeasonToggle = () => {
  const { toggleNightvaultSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleNightvaultSeason();
      }}
    >
      Nightvault
    </button>
  );
};
export const BeastgraveSeasonToggle = () => {
  const { toggleBeastgraveSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleBeastgraveSeason();
      }}
    >
      Beastgrave
    </button>
  );
};
export const DirechasmSeasonToggle = () => {
  const { toggleDirechasmSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleDirechasmSeason();
      }}
    >
      Direchasm
    </button>
  );
};
export const HarrowdeepSeasonToggle = () => {
  const { toggleHarrowdeepSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleHarrowdeepSeason();
      }}
    >
      Harrowdeep
    </button>
  );
};
export const NethermazeSeasonToggle = () => {
  const { toggleNethermazeSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleNethermazeSeason();
      }}
    >
      Nethermaze
    </button>
  );
};
export const GnarlwoodSeasonToggle = () => {
  const { toggleGnarlwoodSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleGnarlwoodSeason();
      }}
    >
      Gnarlwood
    </button>
  );
};
export const WyrdhollowSeasonToggle = () => {
  const { toggleWyrdhollowSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleWyrdhollowSeason();
      }}
    >
      Wyrdhollow
    </button>
  );
};
export const DeathgorgeSeasonToggle = () => {
  const { toggleDeathgorgeSeason } = useWarbandFiltersTogglesContext();

  const [isToggled, setIsToggled] = useState(false);

  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      type="button"
      className={"btn filter-button mb-1 " + (isToggled ? "btn-outline-dark  active" : "btn-outline-dark  inactive")}
      onClick={() => {
        toggleStatus();
        toggleDeathgorgeSeason();
      }}
    >
      Deathgorge
    </button>
  );
};
