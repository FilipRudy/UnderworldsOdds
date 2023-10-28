import WarbandModel from "../../models/warbands/WarbandModel";
import React from "react";
import "../../css/WarbandsBrowser/WarbandsDisplay.css";

export const SearchWarband: React.FC<{warband: WarbandModel}> = (props) =>{

    return(
        <tr role="row">
            <td >{props.warband.name}</td>
                        <td >{props.warband.factionName}</td>
                        <td  >{props.warband.numberOfFighters}</td>
                        <td  >{props.warband.name}</td>
                        <td  >{props.warband.name}</td>
        </tr>
    );
};