import React from "react";
import "./App.css";
import { Navbar } from "./layouts/FooterAndHeader/Header";
import { Footer } from "./layouts/FooterAndHeader/Footer";
import { WarbandsBrowserPage } from "./layouts/WarbandsBrowser/WarbandsBrowserPage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import { GlobalContext } from "./layouts/Util/GlobalContext";

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
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <GlobalContext>
        <Route
          path="/login"
          render={() => <LoginWidget config={oktaConfig} />}
        />
        <Route path="/login/callback" component={LoginCallback} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="background">
              <Navbar />
              <WarbandsBrowserPage />
              <Footer />
            </div>
          )}
        />
      </GlobalContext>
    </Security>
  );
};

export default App;
