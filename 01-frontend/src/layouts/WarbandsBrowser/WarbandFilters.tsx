import React from "react";
import "../../css/WarbandsBrowser/WarbandFilters.css";

import chaosIcon from "../../Images/WarbandsBrowser/WarbandFilters/chaos-icon.png";
import deathIcon from "../../Images/WarbandsBrowser/WarbandFilters/death-icon.png";
import destructionIcon from "../../Images/WarbandsBrowser/WarbandFilters/destruction-icon.png";
import {StarsRating} from "../../universal-components/StarsRating";
import {
    ChaosFactionToggle,
    DeathFactionToggle,
    DestructionFactionToggle,
    OrderFactionToggle
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
            <button type="button" className="btn btn-outline-dark mb-1"
            > 1
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > 2
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > 3
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > 4
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > 5
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > 6
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > 7+
            </button>
        </div>
    </div>);

};

export const SeasonFilter = () =>{
    return(<div className="card mb-3">
        <div className="card-header ">
            Season
        </div>
        <div className="card-body">
            <button type="button" className="btn btn-outline-dark mb-1"
            > Shadespire
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Nightvault
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Beastgrave
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Direchasm
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Harrowdeep
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Nethermaze
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Gnarlwood
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Wyrdhollow
            </button>
            <button type="button" className="btn btn-outline-dark mb-1 active"
            > Deathgorge
            </button>
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