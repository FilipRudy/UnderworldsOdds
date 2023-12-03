import React from "react";
import "../../css/WarbandsBrowser/WarbandFilters.css";
import {StarsRating} from "../../universal-components/StarsRating";

import {
    BeastgraveSeasonToggle,
    ChaosFactionToggle,
    DeathFactionToggle, DeathgorgeSeasonToggle,
    DestructionFactionToggle,
    DirechasmSeasonToggle,
    FiveFightersToggle,
    FourFightersToggle, GnarlwoodSeasonToggle,
    HarrowdeepSeasonToggle, NethermazeSeasonToggle,
    NightvaultSeasonToggle,
    OrderFactionToggle,
    SevenFightersToggle,
    ShadespireSeasonToggle,
    SixFightersToggle,
    ThreeFightersToggle, WyrdhollowSeasonToggle
} from "./WarbandFiltersToggles";

export const WarbandFilters = () => {
    return (
        <div className="FiltersTable ">
            <AllianceFilter/>
            <NumberOfFightersFilter/>
            <SeasonFilter/>
            <RatingFilter/>
        </div>
    );
};

export const AllianceFilter = () =>{
    return( <div className="card mb-3">
        <div className="card-header ">
            Alliance
        </div>
        <div className="card-body">
            <ChaosFactionToggle/>
            <OrderFactionToggle/>
            <DestructionFactionToggle/>
            <DeathFactionToggle/>

        </div>
    </div>);
};

export const NumberOfFightersFilter = () =>{
    return(<div className="card mb-3">
        <div className="card-header ">
            Number of fighters
        </div>
        <div className="card-body">
            <ThreeFightersToggle/>
            <FourFightersToggle/>
            <FiveFightersToggle/>
            <SixFightersToggle/>
            <SevenFightersToggle/>
        </div>
    </div>);

};

export const SeasonFilter = () =>{
    return(<div className="card mb-3">
        <div className="card-header ">
            Season
        </div>
        <div className="card-body">
            <ShadespireSeasonToggle/>
            <NightvaultSeasonToggle/>
            <BeastgraveSeasonToggle/>
            <DirechasmSeasonToggle/>
            <HarrowdeepSeasonToggle/>
            <NethermazeSeasonToggle/>
            <GnarlwoodSeasonToggle/>
            <WyrdhollowSeasonToggle/>
            <DeathgorgeSeasonToggle/>
        </div>
    </div>);
};


export const RatingFilter = () =>{
    return(<div className="card mb-3">
        <div className="card-header ">
            Rating
        </div>
        <div className="card-body">
            <StarsRating/>
        </div>
    </div>);
};