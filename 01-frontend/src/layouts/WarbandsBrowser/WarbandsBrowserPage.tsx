import React, {useEffect, useState} from "react";
import "../../css/WarbandsBrowser/WarbandsBrowserPage.css";
import {WarbandFilters} from "./WarbandFilters";
import WarbandModel from "../../models/warbands/WarbandModel";
import {SearchWarband} from "./SearchWarband";
import {WarbandsDisplay} from "./WarbandsDisplay";

export const WarbandsBrowserPage = () =>{

    const [warbands, setWarbands] = useState<WarbandModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [isToggled, setIsToggled] = useState(true);

    useEffect(() => {
        const fetchWarbands = async () => {
            const baseUrl = "http://localhost:8080/warbands";

            const url = `${baseUrl}?page=0&size=9`;

            const response = await fetch(url);
console.log(response)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseJson = await response.json();
console.log(responseJson)
            const responseData = responseJson._embedded.warbands;
            console.log(responseData)

            const loadedWarbands: WarbandModel[] = [];

            for (const key in responseData)
            {
                loadedWarbands.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    factionName: responseData[key].factionName,
                    numberOfFighters: responseData[key].numberOfFighters,
                });
            }

            setWarbands(loadedWarbands);
            setIsLoading(false);
        };
        fetchWarbands().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <div> <h2>DUPAAAAAAAAAAAA</h2></div>
    );
    }

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };


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

            <WarbandsDisplay warbands={warbands}/>

        </div>
    );
};