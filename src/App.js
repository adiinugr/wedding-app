import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage";
import OpenInvitation from "./pages/OpenInvitation";
import { AudioContextProvider } from "./context/AudioContext";

const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence>
            <AudioContextProvider>
              <div className="relative bg-gray-800">
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={OpenInvitation} />
                  <Route exact path="/page" component={HomePage} />
                </Switch>
              </div>
            </AudioContextProvider>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default App;
