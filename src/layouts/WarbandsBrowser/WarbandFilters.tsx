import React from "react";
import "../../css/WarbandsBrowser/WarbandFilters.css";

import chaosIcon from "../../Images/WarbandsBrowser/WarbandFilters/chaos-icon.png";
import orderIcon from "../../Images/WarbandsBrowser/WarbandFilters/order-icon.png";
import deathIcon from "../../Images/WarbandsBrowser/WarbandFilters/death-icon.png";
import destructionIcon from "../../Images/WarbandsBrowser/WarbandFilters/destruction-icon.png";

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
                                  src={chaosIcon}/>
                    </button>
                    <button type="button" className="btn btn-outline-dark mb-1 active"
                            ><img className="whuicon-lg"
                           title="Universal"
                           alt="Universal"
                                  src={deathIcon}/>
                    </button>
                    <button type="button" className="btn btn-outline-dark mb-1 active"
                            ><img className="whuicon-lg"
                           title="Universal"
                           alt="Universal"
                                  src={destructionIcon}/>
                    </button>
                    <button type="button" className="btn btn-outline-dark mb-1 active"
                            ><img className="whuicon-lg"
                           title="Universal"
                           alt="Universal"
                                  src={orderIcon}/>
                    </button>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header ">
                    Number of fighters
                </div>
                <div className="card-body">
                    dupa
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header ">
                    Season
                </div>
                <div className="card-body">
                    dupa
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-header ">
                    Overall rating
                </div>
                <div className="card-body">
                    dupa                </div>
            </div>
        </div>
    );
};