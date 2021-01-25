import React, { useContext } from "react";
import {
  MdAssignment,
  MdEventNote,
  MdExitToApp,
  MdViewList,
} from "react-icons/md";
import { NavLink, useRouteMatch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CustomMenu = ({
  handleLogout,
  containerClass,
  buttonClass,
  navLinkClass,
}) => {
  const { url } = useRouteMatch();
  const [auth] = useContext(AuthContext);

  const userRole = auth.user.role || [];

  const isUser = userRole.includes("user");
  const isAdmin = userRole.includes("admin");

  const userSidebarLink = [
    {
      id: 1,
      link: `${url}/tryout-list`,
      icon: <MdAssignment size={18} />,
      title: "Try Out",
    },
    {
      id: 2,
      link: `${url}/history`,
      icon: <MdViewList size={18} />,
      title: "History",
    },
  ];

  const adminSidebarLink = [
    {
      id: 1,
      link: `${url}/test`,
      icon: <MdEventNote size={18} />,
      title: "Test List",
    },
  ];

  return (
    <div className={containerClass}>
      <div className={buttonClass}>
        {isUser &&
          userSidebarLink.map((sideLink) => (
            <NavLink
              activeClassName="bg-gray-100 hover:text-green-500 text-green-500"
              className={navLinkClass}
              key={sideLink.id}
              to={sideLink.link}
            >
              {sideLink.icon}
              <div className="ml-3">{sideLink.title}</div>
            </NavLink>
          ))}
        {isAdmin &&
          adminSidebarLink.map((sideLink) => (
            <NavLink
              activeClassName="bg-gray-100 hover:text-green-500 text-green-500"
              className={navLinkClass}
              key={sideLink.id}
              to={sideLink.link}
            >
              {sideLink.icon}
              <div className="ml-3">{sideLink.title}</div>
            </NavLink>
          ))}
      </div>
      <div
        className="mt-4 m-3 mb-8 flex items-center bg-gray-100 text-green-800 px-3 py-2 rounded-lg  cursor-pointer hover:bg-gray-50"
        onClick={handleLogout}
      >
        <MdExitToApp size={18} />
        <div className="ml-3">Logout</div>
      </div>
    </div>
  );
};

export default CustomMenu;
