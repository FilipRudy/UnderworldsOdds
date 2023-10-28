import "../../css/WarbandsBrowser/WarbandsDisplay.css";
import React from "react";
import WarbandModel from "../../models/warbands/WarbandModel";
import {SearchWarband} from "./SearchWarband";


export const WarbandsDisplay: React.FC<{warbands: WarbandModel[]}> = (props) => {
    if(Object.keys(props.warbands).length === 0)
    {
        return(
            <div className="warbands-display">
                <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                       width="100%" role="grid">
                    <thead className="head-row">
                    <tr role="row">
                        <th >Name
                        </th>
                        <th  >Faction
                        </th>
                        <th  >Number of fighters
                        </th>
                        <th  >Season
                        </th>
                        <th >Rating
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr role="row">
                        <td className="empty-row" colSpan={7}>No data available in table</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return(
        <div className="warbands-display">
                <table className="table table-striped dt-responsive dataTable no-footer dtr-inline"
                       width="100%" role="grid">
                    <thead className="head-row">
                    <tr role="row">
                        <th >Name
                        </th>
                        <th  >Faction
                        </th>
                        <th  >Number of fighters
                        </th>
                        <th  >Season
                        </th>
                        <th >Rating
                        </th>
                    </tr>
                    </thead>
            <tbody>
            {props.warbands.map(warband => (
                <SearchWarband warband={warband} key={warband.id}/>
            ))}
            </tbody>
                </table>
        </div>
    );
};