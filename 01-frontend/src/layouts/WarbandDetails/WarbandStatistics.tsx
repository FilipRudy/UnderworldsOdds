import React from "react";
import "../../css/WarbandDetails/WarbandStatistics.css";
import WarbandModel from "../../models/warbands/WarbandModel";

interface WarbandStatisticsProps {
    warband?: WarbandModel;
}

export const WarbandStatistics: React.FC<WarbandStatisticsProps> = ({ warband }) => {
    if (!warband) {
        return <div className="statistics">Loading...</div>;
    }

    return (
        <div className="statistics">
            <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                   width="100%" role="grid">
                <thead className="head-row">
                <tr role="row">
                    <th >Details
                    </th>
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
                    <td>{warband.rating}</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
};

