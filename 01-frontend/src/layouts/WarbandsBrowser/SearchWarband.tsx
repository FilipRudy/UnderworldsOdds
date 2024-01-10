import WarbandModel from "../../models/warbands/WarbandModel";
import React from "react";
import "../../css/WarbandsBrowser/WarbandsDisplay.css";
import {NavLink} from "react-router-dom";

export const SearchWarband: React.FC<{warband: WarbandModel}> = (props) =>{
    return(
        <tr role="row">
            <td >{props.warband.name}</td>
                        <td >{props.warband.factionName}</td>
                        <td  >{props.warband.numberOfFighters}</td>
                        <td  >{props.warband.season}</td>
                        <td  >{props.warband.rating}</td>
                        <td  >                <NavLink style={{ textDecoration: "none" }} to="/warbands"><button className="btn btn-primary" >
                            More info
                        </button></NavLink>

                        </td>
        </tr>
    );
};