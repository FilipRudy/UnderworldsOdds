import {useAttackDiceContext} from "../AttackSide/Contexts/AttackDiceAmountContext";
import {useDefenceDiceContext} from "../DefenceSide/Contexts/DefenceDiceAmountContext";
import {useAttackSideTogglesContext} from "../AttackSide/Contexts/AttackSideTogglesContexts";
import {useDefenceSideTogglesContext} from "../DefenceSide/Contexts/DefenceSideTogglesContexts";
import React from "react";
import {useDefenceRerollDiceContext} from "../DefenceSide/Contexts/DefenceRerollDiceAmount";
import {useAttackRerollDiceContext} from "../AttackSide/Contexts/AttackRerollDiceAmount";


const calculateDiceSuccessChance = (strongSideToggle: boolean,
   weakSideToggle: boolean, fullSupportToggle: boolean, halfSupportToggle: boolean) => {

    let successChance = 1/6;

    if(strongSideToggle)
        successChance += 2/6;
    if(weakSideToggle)
        successChance += 1/6;
    if(fullSupportToggle)
        successChance += 1/6;
    if(halfSupportToggle)
        successChance += 1/6;

    return successChance;
};

const calculateWinChance = (attackDiceAmount: number, attackDiceSuccessChance: number,
                         defenceDiceAmount: number, defenceDiceSuccessChance: number) =>
{
    return (attackDiceAmount*attackDiceSuccessChance* defenceDiceAmount* defenceDiceSuccessChance);
};

export const WinPercentage = () => {

    const { attackDiceAmount } = useAttackDiceContext();
    const { defenceDiceAmount } = useDefenceDiceContext();
    const { defenceRerollDiceAmount } = useDefenceRerollDiceContext();
    const { attackRerollDiceAmount } = useAttackRerollDiceContext();
    const { attackHammerToggle, attackSwordToggle,
        attackFullSupportToggle, attackHalfSupportToggle} = useAttackSideTogglesContext();
    const { defenceShieldToggle, defenceDodgeToggle,
        defenceFullSupportToggle, defenceHalfSupportToggle} = useDefenceSideTogglesContext();



    return (
        <div>
            <h3>win chance: </h3>
            <h3>{attackRerollDiceAmount}</h3>
            <h3>{defenceRerollDiceAmount}</h3>
            <h4>{ calculateWinChance(attackDiceAmount, calculateDiceSuccessChance(attackHammerToggle, attackSwordToggle, attackFullSupportToggle, attackHalfSupportToggle),
                defenceDiceAmount , calculateDiceSuccessChance(defenceShieldToggle, defenceDodgeToggle, defenceFullSupportToggle, defenceHalfSupportToggle)) }%</h4>
        </div>
    );
};


export const DrawPercentage = () => {
    return (
        <div>
            <h3>draw chance:</h3>
            <h4>1%</h4>
        </div>
    );
};


export const CriticalPercentage = () => {
    return (
        <div>
            <h3>critical win chance:</h3>
            <h4>1%</h4>
        </div>
    );
};
