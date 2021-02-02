import { BrowserRouter as Router } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { useContext, useEffect } from "react";
import { getCurrentUser } from "./services/authService";

import RoutePage from "./routes/RoutePage";

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
      <RoutePage />
    </Router>
  );
}

export default App;
