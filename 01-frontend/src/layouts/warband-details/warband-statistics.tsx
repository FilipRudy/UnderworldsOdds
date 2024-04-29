import React, { useEffect, useState } from "react";
import "../../css/warband-details/warbands-statistics.css";
import WarbandModel from "../../models/warbands/warband-model";
import {request} from "../../axios_helper";

interface WarbandStatisticsProps {
    warband?: WarbandModel;
}

export const WarbandStatistics: React.FC<WarbandStatisticsProps> = ({ warband }) => {
    const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem("auth_token");
            if (token) {
                try {
                    const response = await fetch("http://localhost:8080/validate", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "token": token // Send the token in the request header
                        }
                    });

                    if (response.ok) {
                        const isValid = await response.json();
                        setIsValidToken(isValid);
                    } else {
                        setIsValidToken(false);
                    }
                } catch (error) {
                    console.error("Error validating token:", error);
                    setIsValidToken(false);
                }
            } else {
                setIsValidToken(false);
            }
        };


        validateToken();
    }, []);


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
                    <th>Rating:</th>
                    <td>{isValidToken ? warband.rating : "Login to see details"}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
