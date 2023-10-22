import React from "react";
import "../../css/WarbandsBrowser/WarbandFilters.css";

export const WarbandFilters = () => {


    return (
        <div className="FiltersTable ">
            <div className="card mb-3">
                <div className="card-header ">
                    Alliance
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-outline-dark mb-1 active"
                            ><img className="whuicon-lg"
                           title="Universal"
                           alt="Universal"
                           src="../../Images/WarbandsBrowser/WarbandFilters/chaos-icon.png"/>
                    </button>
                    <button>dupa</button>
                    <button>dupa</button>
                    <button>dupa</button>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header ">
                    Number of fighters
                </div>
                <div className="card-body">
                    DUPAKABRAAAAAAAAA
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header ">
                    Season
                </div>
                <div className="card-body">
                    DUPAKABRAAAAAAAAA
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header ">
                    Overall rating
                </div>
                <div className="card-body">
                    DUPAKABRAAAAAAAAA
                </div>
            </div>
        </div>
    );
};