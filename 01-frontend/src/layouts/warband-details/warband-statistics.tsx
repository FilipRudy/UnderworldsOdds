import React, { useEffect, useState } from "react";
import "../../css/warband-details/warbands-statistics.css";
import WarbandModel from "../../models/warbands/warband-model";
import { isAuthTokenValid, request } from "../../axios_helper";
import { StarsRating } from "../../universal-components/stars-rating";
import {decodeToken} from "../util/helpers/hooks/decode-token";

interface WarbandStatisticsProps {
    warband?: WarbandModel;
}

export const WarbandStatistics: React.FC<WarbandStatisticsProps> = ({ warband }) => {
    const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
    const [userReview, setUserReview] = useState<any>(null);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const checkAuthTokenValidity = async () => {
            const isValid = await isAuthTokenValid();
            setIsValidToken(isValid);
        };

        checkAuthTokenValidity();

        const token = localStorage.getItem("auth_token");
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken) {
                const username = decodedToken.sub;
                setUsername(username);
            }
        }
    }, []);

    useEffect(() => {
        const fetchUserReview = async () => {
            try {
                const response = await request("GET", `/review/user/${warband?.id}/${username}`, {});
                setUserReview(response.data.starsAmount);
            } catch (error:any) {
                console.error("Error fetching user review:", error.response?.data?.message || error.message);
            }
        };

        if (warband && username) {
            fetchUserReview();
        }
    }, [warband, username]);

    const handleRatingChange = async (rating: number) => {
        try {
            const response = await request("POST", "/review/add", {
                warbandId: warband?.id,
                starsAmount: rating
            });

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
                            <StarsRating onRateChange={handleRatingChange} defaultRating={userReview} />
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
