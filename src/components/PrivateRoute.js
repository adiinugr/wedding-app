import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);
