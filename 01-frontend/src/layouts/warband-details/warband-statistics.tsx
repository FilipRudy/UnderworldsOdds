import React, { useEffect, useState } from "react";
import "../../css/warband-details/warbands-statistics.css";
import WarbandModel from "../../models/warbands/warband-model";
import { isAuthTokenValid, request } from "../../axios_helper";
import {StarsRating} from "../../universal-components/stars-rating";

interface WarbandStatisticsProps {
    warband?: WarbandModel;
}

export const WarbandStatistics: React.FC<WarbandStatisticsProps> = ({ warband }) => {
    const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuthTokenValidity = async () => {
            const isValid = await isAuthTokenValid();
            setIsValidToken(isValid);
        };

        checkAuthTokenValidity();
    }, []);

    const handleRatingChange = async (rating: number) => {
        try {
            const response = await request("POST", "/review/add", {
                warbandId: warband?.id,
                starsAmount: rating
            });

            console.log("Review added successfully:", response.data);
        } catch (error:any) {
            console.error("Error adding review:", error.response?.data?.message || error.message);
        }
    };

    if (!warband) {
        return <div className="statistics">Loading...</div>;
    }

    return (
        <div className="statistics">
            <table className="table table-striped dt-responsive dataTable no-footer dtr-inline" width="100%" role="grid">
                <thead className="head-row">
                <tr role="row">
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Warband name:</th>
                    <td>{warband.name}</td>
                </tr>
                <tr>
                    <th>Amount Of Fighters:</th>
                    <td>{warband.numberOfFighters}</td>
                </tr>
                <tr>
                    <th>Grand Alliance:</th>
                    <td>{warband.factionName}</td>
                </tr>
                <tr>
                    <th>Season:</th>
                    <td>{warband.season}</td>
                </tr>
                <tr>
                    <th>Your review:</th>
                    <td>
                        {isValidToken ? (
                            <StarsRating onRateChange={handleRatingChange} />
                        ) : (
                            "Login to add review"
                        )}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
