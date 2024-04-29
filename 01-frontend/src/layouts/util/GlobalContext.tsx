import React from "react";
import {AttackDiceAmountContextProvider} from "../dice-calculator/attack-side/contexts/attack-dice-amount-context";
import {AttackRerollDiceAmountContextProvider} from "../dice-calculator/attack-side/contexts/attack-reroll-dice-amount";
import {AttackSideTogglesContextProvider} from "../dice-calculator/attack-side/contexts/attack-side-toggles-context";
import {DefenceDiceAmountContextProvider} from "../dice-calculator/defence-side/contexts/defence-dice-amount-context";
import {DefenceRerollDiceAmountContextProvider} from "../dice-calculator/defence-side/contexts/defence-reroll-dice-amount";
import {
    DefenceSideTogglesContextProvider
} from "../dice-calculator/defence-side/contexts/defence-side-toggles-contexts";
import {WarbandFiltersTogglesContextProvider} from "../warbands-browser/contexts/warband-filters-toggles-context";

export const GlobalContext = ({children}: { children: React.ReactNode }) => {

    return (<DefenceRerollDiceAmountContextProvider>
        <DefenceSideTogglesContextProvider>
            <AttackRerollDiceAmountContextProvider>
                <AttackSideTogglesContextProvider>
                    <AttackDiceAmountContextProvider>
                        <WarbandFiltersTogglesContextProvider>
                            <DefenceDiceAmountContextProvider>
                                {children}
                            </DefenceDiceAmountContextProvider>
                        </WarbandFiltersTogglesContextProvider>
                    </AttackDiceAmountContextProvider>
                </AttackSideTogglesContextProvider>
            </AttackRerollDiceAmountContextProvider>
        </DefenceSideTogglesContextProvider>
    </DefenceRerollDiceAmountContextProvider>)

}