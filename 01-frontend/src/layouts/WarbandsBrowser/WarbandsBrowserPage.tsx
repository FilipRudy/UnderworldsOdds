import React, { useEffect, useState } from "react";
import "../../css/WarbandsBrowser/WarbandsBrowserPage.css";
import { WarbandFilters } from "./WarbandFilters";
import WarbandModel from "../../models/warbands/WarbandModel";
import { WarbandsDisplay } from "./WarbandsDisplay";
import {useWarbandFiltersTogglesContext} from "./Contexts/WarbandFiltersTogglesContext";
import {Factions} from "../../models/warbands/FactionsEnum";
import {ClearFilters} from "../../universal-components/ClearFilters";



export const WarbandsBrowserPage = () => {
  const [warbands, setWarbands] = useState<WarbandModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [isToggled, setIsToggled] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Add currentPage state
  const [currentStarsRating, setCurrentStarsRating] = useState(0);

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

      const url = `${baseUrl}?chaos=${chaosFactionToggle}&order=${orderFactionToggle}&death=${deathFactionToggle}&destruction=${destructionFactionToggle}&threeFighters=${threeFightersToggle}&fourFighters=${fourFightersToggle}&fiveFighters=${fiveFightersToggle}&sixFighters=${sixFightersToggle}&sevenFighters=${sevenFightersToggle}&shadespire=${shadespireSeasonToggle}&nightvault=${nightvaultSeasonToggle}&beastgrave=${beastgraveSeasonToggle}&direchasm=${direchasmSeasonToggle}&harrowdeep=${harrowdeepSeasonToggle}&nethermaze=${nethermazeSeasonToggle}&gnarlwood=${gnarlwoodSeasonToggle}&wyrdhollow=${wyrdhollowSeasonToggle}&deathgorge=${deathgorgeSeasonToggle}&rating=${currentStarsRating}`;


      const response = await fetch(url);

      if (!response.ok) {
        const loadedWarbands: WarbandModel[] = [];
        return loadedWarbands;
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
            warband.numberOfFighters,
            warband.season,
            warband.rating
        );
      });

      setWarbands(loadedWarbands);
      setIsLoading(false);
      setCurrentPage(1);
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
    currentStarsRating,
  ]);


  const toggleStatus = () => {
    setIsToggled(!isToggled);
  };

  const handleStarsRatingChange = (rating: number) => {
    setCurrentStarsRating(rating);
  };

  const filtersKey = JSON.stringify({
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
  });

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

      {isToggled && <WarbandFilters  onRatingChange={handleStarsRatingChange} />}


      <WarbandsDisplay key={filtersKey} warbands={warbands} />
    </div>
  );
};
