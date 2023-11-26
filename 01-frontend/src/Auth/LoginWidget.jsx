import {useOktaAuth} from "@okta/okta-react";
import {DiceAmount} from "../layouts/DiceCalculator/DiceAmount";
import {Redirect} from "react-router-dom";
import React from "react";
import OktaSignInWidget from "./OktaSignInWidget";


const LoginWidget = ({config}) => {
    const {oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };
    
    const onError = (err) => {
        console.log("Sign in error", err);
    };
    
    if(!authState) {
        return (<DiceAmount/>);
    }
    
    return authState.isAuthenticated ? 
        <Redirect to={{pathname: "/"}}/>
    :
     <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/> ;
};
export default LoginWidget;