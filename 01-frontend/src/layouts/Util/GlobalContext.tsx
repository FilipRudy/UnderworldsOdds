import React from "react";
import {AttackDiceAmountContextProvider} from "../DiceCalculator/AttackSide/Contexts/AttackDiceAmountContext";
import {AttackRerollDiceAmountContextProvider} from "../DiceCalculator/AttackSide/Contexts/AttackRerollDiceAmount";
import {AttackSideTogglesContextProvider} from "../DiceCalculator/AttackSide/Contexts/AttackSideTogglesContexts";
import {DefenceDiceAmountContextProvider} from "../DiceCalculator/DefenceSide/Contexts/DefenceDiceAmountContext";
import {DefenceRerollDiceAmountContextProvider} from "../DiceCalculator/DefenceSide/Contexts/DefenceRerollDiceAmount";
import {
    DefenceSideTogglesContextProvider
} from "../DiceCalculator/DefenceSide/Contexts/DefenceSideTogglesContexts";
import {WarbandFiltersTogglesContextProvider} from "../WarbandsBrowser/Contexts/WarbandFiltersTogglesContext";

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