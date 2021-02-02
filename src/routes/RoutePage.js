import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import HomeScreen from "../pages/HomeScreen";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Test from "../pages/student/Test";
import Dashboard from "../pages/Dashboard";
import AboutScreen from "../pages/AboutScreen";

const RoutePage = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/about" component={AboutScreen} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/test/:testId" component={Test} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default RoutePage;
