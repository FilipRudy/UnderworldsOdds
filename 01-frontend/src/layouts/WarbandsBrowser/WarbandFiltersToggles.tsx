import React, {useState} from "react";
import orderIcon from "../../Images/WarbandsBrowser/WarbandFilters/order-icon.png";
import chaosIcon from "../../Images/WarbandsBrowser/WarbandFilters/chaos-icon.png";
import destructionIcon from "../../Images/WarbandsBrowser/WarbandFilters/destruction-icon.png";
import deathIcon from "../../Images/WarbandsBrowser/WarbandFilters/death-icon.png";
import {useWarbandFiltersTogglesContext} from "./Contexts/WarbandFiltersTogglesContext";


export const ChaosFactionToggle = () => {

    const {toggleChaosFaction} = useWarbandFiltersTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button type="button" className="btn btn-outline-dark mb-1 active" onClick={() => {
            toggleStatus();
            toggleChaosFaction();}} >
            <img className="whuicon-lg"
                 title="Universal"
                 alt="Universal"
                 src={chaosIcon}/>
        </button>
    );
};


export const OrderFactionToggle = () => {

    const {toggleOrderFaction} = useWarbandFiltersTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button type="button" className="btn btn-outline-dark mb-1 active" onClick={() => {
            toggleStatus();
            toggleOrderFaction();}} >
            <img className="whuicon-lg"
                 title="Universal"
                 alt="Universal"
                 src={orderIcon}/>
        </button>
    );
};


export const DestructionFactionToggle = () => {

    const {toggleDestructionFaction} = useWarbandFiltersTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button type="button" className="btn btn-outline-dark mb-1 active" onClick={() => {
            toggleStatus();
            toggleDestructionFaction();}} >
            <img className="whuicon-lg"
                 title="Universal"
                 alt="Universal"
                 src={destructionIcon}/>
        </button>
    );
};


export const DeathFactionToggle = () => {

    const {toggleDeathFaction} = useWarbandFiltersTogglesContext();

    const [isToggled, setIsToggled] = useState(false);

    const toggleStatus = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button type="button" className="btn btn-outline-dark mb-1 active" onClick={() => {
            toggleStatus();
            toggleDeathFaction();}} >
            <img className="whuicon-lg"
                 title="Universal"
                 alt="Universal"
                 src={deathIcon}/>
        </button>
    );
};
