import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./layouts/footer-header/footer";
import { Navbar } from "./layouts/footer-header/header";
import { WarbandsBrowserPage } from "./layouts/warbands-browser/warbands-browser-page";
import { GlobalContext } from "./layouts/util/GlobalContext";
import {DiceCalculator} from "./layouts/dice-calculator/dice-calculator";
import {WarbandDetails} from "./layouts/warband-details/warband-details";
import {LoginPage} from "./layouts/auth/login-page";
import VerifyCode from "./layouts/auth/verify-code";
import SuccessfulRegister from "./layouts/auth/successful-register";
import {RecoverPage} from "./layouts/auth/recover-page";
import UserProfile from "./layouts/auth/user-profile";

export const App = () => {
  return (
    <GlobalContext>

        <div className="background">
            <Navbar />
        <Routes>

          <Route path="/" element={<DiceCalculator/>} />
          <Route path="/warbands" element={<WarbandsBrowserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/warbands/:id" element={<WarbandDetails/>} />
          <Route path="/profile/:username" element={<UserProfile/>} />
          <Route path="/verify" element={<VerifyCode />} />
          <Route path="/register/success" element={<SuccessfulRegister />} />
          <Route path="/recover" element={<RecoverPage />} />

        </Routes>
            <Footer />
</div>
    </GlobalContext>
  );
};
