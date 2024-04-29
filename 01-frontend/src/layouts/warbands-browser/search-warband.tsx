import WarbandModel from "../../models/warbands/warband-model";
import React from "react";
import "../../css/warbands-browser/warbands-display.css";
import {NavLink} from "react-router-dom";

export const SearchWarband: React.FC<{warband: WarbandModel}> = (props) =>{
    const width = window.innerWidth;
    if(width < 600)
    {
        return(
            <tr role="row">
                <td >{props.warband.name}</td>
                <td  >                <NavLink style={{ textDecoration: "none" }} to="/warbands"><button className="btn btn-primary" >
                    More info
                </button></NavLink>

                </td>
            </tr>
        );
    }
    else
    {
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
    }

};