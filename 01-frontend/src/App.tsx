import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./layouts/FooterAndHeader/Footer";
import { Navbar } from "./layouts/FooterAndHeader/Header";
import { WarbandsBrowserPage } from "./layouts/WarbandsBrowser/WarbandsBrowserPage";
import { GlobalContext } from "./layouts/Util/GlobalContext";
import {DiceCalculator} from "./layouts/DiceCalculator/DiceCalculator";

export const App = () => {
  return (
    <GlobalContext>

        <div className="background">
            <Navbar />
        <Routes>

          <Route path="/" element={<DiceCalculator/>} />
          <Route path="/warbands" element={<WarbandsBrowserPage />} />

        </Routes>
            <Footer />
</div>
    </GlobalContext>
  );
};
