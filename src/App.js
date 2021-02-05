import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage";
import OpenInvitation from "./pages/OpenInvitation";

const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <div className="relative bg-gray-800">
                <Route exact path="/" component={OpenInvitation} />
                <Route exact path="/page" component={HomePage} />
              </div>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default App;
