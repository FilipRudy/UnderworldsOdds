import React from "react";
import "./App.css";
import {Navbar} from "./layouts/FooterAndHeader/Header";
import {Footer} from "./layouts/FooterAndHeader/Footer";
import {DiceCalculator} from "./layouts/DiceCalculator/DiceCalculator";
import {
    AttackSideTogglesContextProvider
} from "./layouts/DiceCalculator/AttackSide/Contexts/AttackSideTogglesContexts";
import {AttackDiceAmountContextProvider} from "./layouts/DiceCalculator/AttackSide/Contexts/AttackDiceAmountContext";
import {
    DefenceSideTogglesContextProvider
} from "./layouts/DiceCalculator/DefenceSide/Contexts/DefenceSideTogglesContexts";
import {
    DefenceDiceAmountContextProvider
} from "./layouts/DiceCalculator/DefenceSide/Contexts/DefenceDiceAmountContext";
import {
    DefenceRerollDiceAmountContextProvider
} from "./layouts/DiceCalculator/DefenceSide/Contexts/DefenceRerollDiceAmount";
import {
    AttackRerollDiceAmountContextProvider
} from "./layouts/DiceCalculator/AttackSide/Contexts/AttackRerollDiceAmount";
import {WarbandsBrowserPage} from "./layouts/WarbandsBrowser/WarbandsBrowserPage";
import {WarbandFiltersTogglesContextProvider} from "./layouts/WarbandsBrowser/Contexts/WarbandFiltersTogglesContext";
import {oktaConfig} from "./lib/oktaConfig";
import {OktaAuth, toRelativeUrl} from "@okta/okta-auth-js";
import {BrowserRouter, Route, useHistory} from "react-router-dom";
import {LoginCallback, Security} from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import {GlobalContext} from "./layouts/Util/GlobalContext";


const oktaAuth = new OktaAuth(oktaConfig);
export const App = () => {

    const history = useHistory();
    const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
        history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
    };
    const customAuthHandler = () => {
        history.push("/login");
    };

    return (

        <GlobalContext>
            <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
                <Route path='/login'
                       render={() => <LoginWidget config={oktaConfig}/>}/>
                <Route path='/login/callback'
                       component={LoginCallback}/>
                <div className="background">
                    <Navbar/>
                    <WarbandsBrowserPage/>
                    <Footer/>
                </div>
            </Security>
        </GlobalContext>
    );
};

export default App;
