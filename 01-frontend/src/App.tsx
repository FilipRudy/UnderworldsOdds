import * as React from "react";
import { Footer } from "./layouts/FooterAndHeader/Footer";
import { Navbar } from "./layouts/FooterAndHeader/Header";
import { WarbandsBrowserPage } from "./layouts/WarbandsBrowser/WarbandsBrowserPage";
import { GlobalContext } from "./layouts/Util/GlobalContext";

export const App = () => {
  return (
    <GlobalContext>
      <div className="background">
        <Navbar />
        <WarbandsBrowserPage />
        <Footer />
      </div>
    </GlobalContext>
  );
};
