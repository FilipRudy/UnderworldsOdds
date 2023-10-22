import React, {useState} from "react";
import "../../css/WarbandsBrowser/WarbandsBrowserPage.css";
import {WarbandFilters} from "./WarbandFilters";

export const WarbandsBrowserPage = () =>{

    const [isToggled, setIsToggled] = useState(true);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    }


    return (
        <div >
            <div className="WarbandsBrowserPage">
            <div className="InputBar">
                <input className="form-control form-control-lg" type="text"
                       placeholder="Search for any warband"/>
            </div>
            <div className="FiltersToggle">
                <button className="btn btn-primary btn-lg" onClick={toggleStatus}>
                        Filters
                </button>
            </div>
            </div>
            {isToggled && <WarbandFilters/>}
        </div>
    );
};