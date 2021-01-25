import { useContext, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import TryoutList from "./student/TryoutList";
import TryoutHistory from "./student/TryoutHistory";
import TestList from "./admin/TestLists";
import AddTest from "./admin/AddTest";
import EditTest from "./admin/EditTest";
import QuizLists from "./admin/QuizLists";
import AddQuiz from "./admin/AddQuiz";
import EditQuiz from "./admin/EditQuiz";
import CustomMenu from "../components/CustomMenu";
import HistoryDetail from "./student/HistoryDetail";
import ChangePassword from "./student/ChangePassword";

export default function Dashboard() {
  const [auth, setAuth] = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleLogout = async () => {
    localStorage.removeItem("user");
    setAuth({
      isAuth: false,
      user: {},
    });

    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  return (
    <div className="h-screen flex">
      <div className="bg-green-500 w-72 hidden md:flex md:flex-col ">
        <div className="text-center text-gray-50 uppercase text-2xl py-8 font-bold">
          Mathiaku
        </div>
        <CustomMenu
          handleLogout={handleLogout}
          containerClass="flex flex-col justify-between h-full"
          buttonClass="ml-3"
          navLinkClass="mt-1 rounded-l-md px-3 py-2 hover:bg-gray-100 hover:text-green-500 flex items-center text-gray-50 cursor-pointer"
        />
      </div>
      <div className="w-full">
        <div className="bg-white shadow-lg header flex items-center justify-end px-6">
          <div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
            <MdMenu size={25} />
          </div>
        </div>
        <div className="bg-gray-100 relative content">
          {showMenu && (
            <CustomMenu
              handleLogout={handleLogout}
              containerClass="flex flex-col md:hidden absolute z-10 w-full pt-6 justify-between bg-green-500"
              buttonClass="mx-3"
              navLinkClass="mt-1 rounded-md px-3 py-2 hover:bg-gray-100 hover:text-green-500 flex items-center text-gray-50 cursor-pointer"
            />
          )}
          <div className="flex absolute bg-gray-100 md:h-full w-full">
            <Switch>
              <Route path={`${url}/tryout-list`} component={TryoutList} />

              <Route exact path={`${url}/history`} component={TryoutHistory} />
              <Route
                path={`${url}/history/history-detail/:testId`}
                component={HistoryDetail}
              />

              <Route
                path={`${url}/change-password`}
                component={ChangePassword}
              />

              <Route exact path={`${url}/test`} component={TestList} />
              <Route path={`${url}/test/add`} component={AddTest} />
              <Route path={`${url}/test/edit/:testId`} component={EditTest} />
              <Route
                path={`${url}/test/quiz-list/:testId`}
                component={QuizLists}
              />
              <Route
                path={`${url}/test/add-quiz/:testId`}
                component={AddQuiz}
              />
              <Route
                path={`${url}/test/quiz-edit/:testId/:quizId`}
                component={EditQuiz}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
