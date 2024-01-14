import React, {useEffect, useState} from "react";
import {WarbandMainImage} from "./WarbandMainImage";
import WarbandModel from "../../models/warbands/WarbandModel";
import {Factions} from "../../models/warbands/FactionsEnum";
import {useParams} from "react-router-dom";
import {WarbandStatistics} from "./WarbandStatistics";
import "../../css/WarbandDetails/WarbandDetails.css";
import {WarbandFighterCards} from "./WarbandFighterCards";

export const WarbandDetails  = () => {
    const { id } = useParams();
    const [warband, setWarband] = useState<WarbandModel>();

    useEffect(() => {
        const fetchWarband = async () => {
            const baseUrl = "http://localhost:8080/warbands";

            const url = `${baseUrl}/${id}`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    console.error("Error fetching warband data");
                    return;
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

                const loadedWarbands: WarbandModel = new WarbandModel(
                    responseJson.id,
                    responseJson.name,
                    mapFactionName(responseJson.factionName),
                    responseJson.numberOfFighters,
                    responseJson.season,
                    responseJson.rating
                );

                setWarband(loadedWarbands);
            } catch (error) {
                console.error("Error fetching warband data:", error);
            }
        };
        fetchWarband().catch((error: any) => {
            console.log(error);
        });
    }, [id]);


    return (
        <div className="warband-details">
            <div className="details-first-row">
            <WarbandMainImage warbandName={warband?.name}/>
            <WarbandStatistics warband={warband}/>
            </div>
            <div className="fighter-cards-holder">
                <WarbandFighterCards directory={warband?.name} numberOfCards={warband?.numberOfFighters}/>
            </div>
        </div>
    );
    
};
