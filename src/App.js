import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute";
import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import { getCurrentUser } from "./services/authService";

import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import Test from "./pages/student/Test";
import Dashboard from "./pages/Dashboard";
import AboutScreen from "./pages/AboutScreen";
import Register from "./pages/Register";

function App() {
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();

      if (!user) {
        setAuth({
          isAuth: false,
          user: {},
        });
      } else if (user) {
        setAuth({
          isAuth: true,
          user: user.data,
        });
      }
    };

    getUser();
  }, [setAuth]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/test/:testId" component={Test} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
