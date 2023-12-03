import React, { useEffect, useState } from "react";
import "../../css/WarbandsBrowser/WarbandsBrowserPage.css";
import { WarbandFilters } from "./WarbandFilters";
import WarbandModel from "../../models/warbands/WarbandModel";
import { WarbandsDisplay } from "./WarbandsDisplay";
import {useWarbandFiltersTogglesContext} from "./Contexts/WarbandFiltersTogglesContext";
import {Factions} from "../../models/warbands/FactionsEnum";

export const WarbandsBrowserPage = () => {
  const [warbands, setWarbands] = useState<WarbandModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [isToggled, setIsToggled] = useState(true);

  const {chaosFactionToggle} = useWarbandFiltersTogglesContext();
  const {orderFactionToggle} = useWarbandFiltersTogglesContext();
  const {deathFactionToggle} = useWarbandFiltersTogglesContext();
  const {destructionFactionToggle} = useWarbandFiltersTogglesContext();
  const {threeFightersToggle} = useWarbandFiltersTogglesContext();
  const {fourFightersToggle} = useWarbandFiltersTogglesContext();
  const {fiveFightersToggle} = useWarbandFiltersTogglesContext();
  const {sixFightersToggle} = useWarbandFiltersTogglesContext();
  const {sevenFightersToggle} = useWarbandFiltersTogglesContext();
  const {shadespireSeasonToggle} = useWarbandFiltersTogglesContext();
  const {nightvaultSeasonToggle} = useWarbandFiltersTogglesContext();
  const {beastgraveSeasonToggle} = useWarbandFiltersTogglesContext();
  const {direchasmSeasonToggle} = useWarbandFiltersTogglesContext();
  const {harrowdeepSeasonToggle} = useWarbandFiltersTogglesContext();
  const {nethermazeSeasonToggle} = useWarbandFiltersTogglesContext();
  const {gnarlwoodSeasonToggle} = useWarbandFiltersTogglesContext();
  const {wyrdhollowSeasonToggle} = useWarbandFiltersTogglesContext();
  const {deathgorgeSeasonToggle} = useWarbandFiltersTogglesContext();


  useEffect(() => {
    const fetchWarbands = async () => {
      const baseUrl = "http://localhost:8080/warbands";

      const url = `${baseUrl}?chaos=${chaosFactionToggle}&order=${orderFactionToggle}&death=${deathFactionToggle}&destruction=${destructionFactionToggle}&threeFighters=${threeFightersToggle}&fourFighters=${fourFightersToggle}&fiveFighters=${fiveFightersToggle}&sixFighters=${sixFightersToggle}&sevenFighters=${sevenFightersToggle}&shadespire=${shadespireSeasonToggle}&nightvault=${nightvaultSeasonToggle}&beastgrave=${beastgraveSeasonToggle}&direchasm=${direchasmSeasonToggle}&harrowdeep=${harrowdeepSeasonToggle}&nethermaze=${nethermazeSeasonToggle}&gnarlwood=${gnarlwoodSeasonToggle}&wyrdhollow=${wyrdhollowSeasonToggle}&deathgorge=${deathgorgeSeasonToggle}`;


      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();
      const mapFactionName = (factionName: string): Factions => {
        switch (factionName) {
          case "Chaos":
            return Factions.CHAOS;
          case "Destruction":
            return Factions.DESTRUCTION;
          case "Death":
            return Factions.DEATH;
          case "Order":
            return Factions.ORDER;
          default:
            return Factions.CHAOS;
        }
      };

      const loadedWarbands: WarbandModel[] = responseJson.map((warband: WarbandModel) => {
        return new WarbandModel(
            warband.id,
            warband.name,
            mapFactionName(warband.factionName),
            warband.numberOfFighters
        );
      });

      setWarbands(loadedWarbands);
      setIsLoading(false);
    };

    fetchWarbands().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [
    chaosFactionToggle,
    orderFactionToggle,
    deathFactionToggle,
    destructionFactionToggle,
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
  ]);

  if (isLoading) {
    return (
      <div>
        {" "}
        <h2>DUPAAAAAAAAAAAA</h2>
      </div>
    );
  }

  const toggleStatus = () => {
      console.log(chaosFactionToggle);
    setIsToggled(!isToggled);
  };

  return (
    <div className="WarbandsBrowser">
      <div className="WarbandsBrowserPage">
        <div className="InputBar">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search for any warband"
          />
        </div>
        <div className="FiltersToggle">
          <button className="btn btn-primary btn-lg" onClick={toggleStatus}>
            Filters
          </button>
        </div>
      </div>
      {isToggled && <WarbandFilters />}
      <WarbandsDisplay warbands={warbands} />
    </div>
  );
};
