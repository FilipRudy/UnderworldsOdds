import React, { useState, useEffect } from "react";
import { request } from "../../axios_helper";
import WarbandModel from "../../models/warbands/WarbandModel";
import {AxiosResponse} from "axios";

interface ApiResponse {
    _embedded: {
        warbands: WarbandModel[];
    };
}

const AuthContent: React.FC = () => {
    const [data, setData] = useState<ApiResponse>({ _embedded: { warbands: [] } });

    useEffect(() => {
        request("GET", "/warbands", {}).then((response: AxiosResponse<ApiResponse>) => {
            console.log(response);
            setData(response.data);
        });
    }, []);

    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Backend response</h5>
                        <p className="card-text">Content:</p>
                        <ul>
                            {data._embedded.warbands.map((warband, index) => (
                                <li key={index}>
                                    <strong>Name:</strong> {warband.name},{" "}
                                    <strong>Faction:</strong> {warband.factionName},{" "}
                                    <strong>Fighters:</strong> {warband.numberOfFighters}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthContent;
