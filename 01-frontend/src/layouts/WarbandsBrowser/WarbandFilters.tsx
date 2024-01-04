import React, {useState} from "react";
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

interface WarbandFiltersProps {
    onRatingChange: (rating: number) => void;
}

export const WarbandFilters: React.FC<WarbandFiltersProps> = ({  onRatingChange }) => {

    return (
        <div className="FiltersTable ">
            <AllianceFilter/>
            <NumberOfFightersFilter/>
            <SeasonFilter/>
            <RatingFilter onRatingChange={onRatingChange} />        </div>
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


interface RatingFilterProps {
    onRatingChange: (rating: number) => void;
}

export const RatingFilter: React.FC<RatingFilterProps> = ({onRatingChange }) => {
    const handleRatingChange = (rating: number) => {
        onRatingChange(rating);
    };

    return (
        <div className="card mb-3">
            <div className="card-header ">
                Rating
            </div>
            <div className="card-body">
                <StarsRating onRateChange={handleRatingChange} />
            </div>
        </div>
    );
};