import React, { useEffect, useState } from "react";
import { WarbandMainImage } from "./warband-main-image";
import WarbandModel from "../../models/warbands/warband-model";
import { Factions } from "../../models/warbands/factions-enum";
import { useParams } from "react-router-dom";
import { WarbandStatistics } from "./warband-statistics";
import "../../css/warband-details/warband-details.css";
import { WarbandFighterCards } from "./warband-fighter-cards";

export const WarbandDetails = () => {
    const { id } = useParams();
    const [warband, setWarband] = useState<WarbandModel>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWarband = async () => {
            const baseUrl = "http://localhost:8080/warbands";
            const url = `${baseUrl}/${id}`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    console.error("Error fetching warband data");
                    setIsLoading(false);
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

                const loadedWarband: WarbandModel = new WarbandModel(
                    responseJson.id,
                    responseJson.name,
                    mapFactionName(responseJson.factionName),
                    responseJson.numberOfFighters,
                    responseJson.season,
                    responseJson.rating
                );
                setWarband(loadedWarband);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching warband data:", error);
                setIsLoading(false);
            }
        };

        fetchWarband().catch((error: any) => {
            console.log(error);
        });
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!warband) {
        window.location.href = "/";
        return null;
    }

    return (
        <div className="warband-details">
            <div className="card mb-3 warband-card warband-details">
                <div className="card-body warband-card-body">
                    <div className="details-first-row">
                        <WarbandMainImage warbandName={warband?.name}/>
                        <WarbandStatistics warband={warband}/>
                    </div>
                </div>
            </div>
            <div className="fighter-cards-holder">
                <WarbandFighterCards directory={warband?.name} numberOfCards={warband?.numberOfFighters}/>
            </div>
        </div>
    );
};
