import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import Wave from "../assets/images/wave.svg";
import Mtku from "../assets/images/mtku.png";

import { AuthContext } from "../context/AuthContext";

const HomeHeader = ({ showMenu, setShowMenu }) => {
  const [auth] = useContext(AuthContext);

  return (
    <>
      <img
        src={Wave}
        className="absolute top-0 left-2/5"
        width={400}
        alt="wave"
      />
      <div className="md:py-5 md:px-6 absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto bg-green-600 md:bg-transparent">
          <div className="px-5 py-4 md:px-0 md:py-0 flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="rounded-full"
                src={Mtku}
                alt="mathiaku"
                width={40}
              />
              <div className="ml-3 uppercase font-medium text-gray-50 md:text-green-600 text-lg md:text-3xl">
                Mathiaku
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Link to="/">
                <button className="px-4 py-2 hover:text-green-600 focus:outline-none focus:text-green-600">
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button className="px-4 py-2 hover:text-green-600 focus:outline-none focus:text-green-600">
                  About
                </button>
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              {!auth.isAuth && (
                <>
                  <Link to="/register">
                    <button className="px-4 py-2 mr-3 focus:outline-none hover:text-green-600 rounded">
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="px-4 py-2 bg-green-600 focus:outline-none text-white hover:bg-green-500 rounded">
                      Log In
                    </button>
                  </Link>
                </>
              )}
            </div>
            <button
              onClick={setShowMenu}
              className=" md:hidden text-gray-50 focus:outline-none"
            >
              <MdMenu size={25} />
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="bg-green-500 p-6 flex flex-col">
            <button className="px-4 py-2 text-gray-50 font-medium">Home</button>
            <button className="px-4 py-2  text-gray-50 font-medium">
              Process
            </button>
            <button className="px-4 py-2  text-gray-50 font-medium">
              About us
            </button>
            <div className="flex mt-2 justify-between">
              <Link to="/register">
                <button className="px-4 py-2 bg-green-600 self-end focus:outline-none text-white hover:bg-green-500 rounded">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 bg-green-600 self-end focus:outline-none text-white hover:bg-green-500 rounded">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeHeader;
