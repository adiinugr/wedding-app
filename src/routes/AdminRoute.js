import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const AdminRoute = ({ component: Component, ...rest }) => {
  const [auth] = useContext(AuthContext);
  const user = auth.user;
  const userRole = auth.user.role || [];

  return (
    <Route
      {...rest}
      render={(props) =>
        user && userRole.includes("admin") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard/tryout-list" />
        )
      }
    />
  );
};
