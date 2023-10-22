import {useAttackDiceContext} from "../AttackSide/Contexts/AttackDiceAmountContext";
import {useDefenceDiceContext} from "../DefenceSide/Contexts/DefenceDiceAmountContext";
import {useAttackSideTogglesContext} from "../AttackSide/Contexts/AttackSideTogglesContexts";
import {useDefenceSideTogglesContext} from "../DefenceSide/Contexts/DefenceSideTogglesContexts";
import React, {useState} from "react";
import {useDefenceRerollDiceContext} from "../DefenceSide/Contexts/DefenceRerollDiceAmount";
import {useAttackRerollDiceContext} from "../AttackSide/Contexts/AttackRerollDiceAmount";


const calculateDiceSuccessChance = (strongSideToggle: boolean,
   weakSideToggle: boolean, fullSupportToggle: boolean, halfSupportToggle: boolean) => {

    const successChance = [10, 0 ,0 ,0 ,0 ,0];

    if(strongSideToggle)
    {
        successChance[1] = 1;
        successChance[2] = 1;
    }
    if(weakSideToggle)
        successChance[3] = 1;
    if(fullSupportToggle)
        successChance[4] = 1;
    if(halfSupportToggle)
        successChance[5] = 1;

    return successChance;
};

function calculateWinChance(
    attackDiceAmount: number,
    defenceDiceAmount: number,
    attackDiceValues: number[],
    defenceDiceValues: number[],
    attackRerollDiceAmount: number,
    defenceRerollDiceAmount: number,
    numberOfSimulations: number
) {
    const possibleOutcomes = 4; // -1, 0, 1, 10

    const outcomesValues: number[] = new Array(possibleOutcomes).fill(0);

    for (let i = 0; i < numberOfSimulations; i++) {
        let attackValueSum = 0;
        let attackRerollAmount = attackRerollDiceAmount;

        for (let j = 0; j < attackDiceAmount; j++) {
            let currentRoll =  attackDiceValues[Math.floor(Math.random() * attackDiceValues.length)];
            if(attackRerollAmount > 0 && currentRoll === 0)
            {
                currentRoll = attackDiceValues[Math.floor(Math.random() * attackDiceValues.length)];
                attackRerollAmount--;
            }
            attackValueSum += currentRoll;
        }

        let defenceValueSum = 0;
        let defenceRerollAmount = defenceRerollDiceAmount;
        for (let j = 0; j < defenceDiceAmount; j++) {
            let currentRoll =  defenceDiceValues[Math.floor(Math.random() * defenceDiceValues.length)];
            if(defenceRerollAmount > 0 && currentRoll === 0)
            {
                currentRoll = defenceDiceValues[Math.floor(Math.random() * defenceDiceValues.length)];
                defenceRerollAmount--;
            }
            defenceValueSum += currentRoll;
        }

        if(attackValueSum > defenceValueSum+6){
            outcomesValues[3]++;
        }
        else if (attackValueSum > defenceValueSum) {
            outcomesValues[2]++;
        } else if (attackValueSum > 0 && attackValueSum === defenceValueSum) {
            outcomesValues[0]++;
        } else {
            outcomesValues[1]++;
        }
    }

    const totalOutcomes = outcomesValues.reduce((acc, val) => acc + val, 0);

    const resultPercentages = outcomesValues.map((count) =>
        ((count / totalOutcomes) * 100).toFixed(0)
    );
    resultPercentages[2] = (parseInt(resultPercentages[2]) + parseInt(resultPercentages[3])).toFixed(0) ;

    return resultPercentages;
}


export const WinPercentage = () => {

    const { attackDiceAmount } = useAttackDiceContext();
    const { defenceDiceAmount } = useDefenceDiceContext();
    const { defenceRerollDiceAmount } = useDefenceRerollDiceContext();
    const { attackRerollDiceAmount } = useAttackRerollDiceContext();
    const { attackHammerToggle, attackSwordToggle,
        attackFullSupportToggle, attackHalfSupportToggle} = useAttackSideTogglesContext();
    const { defenceShieldToggle, defenceDodgeToggle,
        defenceFullSupportToggle, defenceHalfSupportToggle} = useDefenceSideTogglesContext();


    const [winChance, setWinChance] = useState("0%");
    const [drawChance, setDrawChance] = useState("0%");
    const [criticalWinChance, setCriticalWinChance] = useState("0%");

        const handleCalculateClick = () => {
            const winChances = calculateWinChance(
                attackDiceAmount,
                defenceDiceAmount,
                calculateDiceSuccessChance(
                    attackHammerToggle,
                    attackSwordToggle,
                    attackFullSupportToggle,
                    attackHalfSupportToggle
                ),
                calculateDiceSuccessChance(
                    defenceShieldToggle,
                    defenceDodgeToggle,
                    defenceFullSupportToggle,
                    defenceHalfSupportToggle
                ),attackRerollDiceAmount,defenceRerollDiceAmount,
                1000000
            );
            setWinChance(winChances[2] + "%");
            setDrawChance(winChances[0] + "%");
            setCriticalWinChance(winChances[3] + "%");
        };

        return (
            <div>
                <div>
                    <h3>win chance:</h3>
                    <h4>{winChance}</h4>
                </div>
                <div>
                    <h3>draw chance:</h3>
                    <h4>{drawChance}</h4>
                </div>
                <div>
                    <h3>critical win chance:</h3>
                    <h4>{criticalWinChance}</h4>
                </div>
                <button className='btn btn-primary' onClick={handleCalculateClick}>Calculate</button>
            </div>
        );
    };
