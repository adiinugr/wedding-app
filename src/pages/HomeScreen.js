import { Link } from "react-router-dom";
import { useState } from "react";

import Read from "../assets/images/read.svg";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="font-custom min-h-screen">
      <HomeHeader
        showMenu={showMenu}
        setShowMenu={() => setShowMenu(!showMenu)}
      />

      <div className="relative overflow-hidden px-10 md:px-20">
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center pt-16 mb-16 md:mb-0 md:pb-0 md:h-screen ">
            <div className="md:w-1/2 mt-16 md:mt-0 mb-4 sm:mb-16 md:mb-0">
              <p className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8">
                Selamat datang di web{" "}
                <span className="text-green-600">Mathiaku</span> edisi spesial
                <span className="text-green-600"> SBMPTN</span>
              </p>
              <p className="mb-4 md:mb-8 leading-5">
                Website ini dibuat untuk membantu siswa SMADASA belajar dalam
                rangka menghadapi SBMPTN (Seleksi Bersama Masuk Perguruan Tinggi
                Negeri). Di dalamnya terdapat try out yang diupdate secara rutin
                untuk mengukur batas kemampuanmu. Oh ya, sesuai namanya materi
                atau kontennya hanya sebatas matematika. Semoga bermanfaat!
              </p>
              <Link to="/dashboard/tryout-list">
                <button className="bg-green-600 focus:outline-none text-white px-5 md:px-4 py-4 md:py-3 rounded hover:bg-green-500">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-16 sm:mt-0 text-center flex-1 flex justify-end">
              <img src={Read} width={400} height={400} alt="read" />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-100">
        <div className="container mx-auto px-6 py-12 text-center border-t border-gray-300">
          <p>
            Copyright © {new Date().getFullYear()} Nehan Dev. | Illustrations by{" "}
            <a href="https://freepik.com/" className=" font-bold underline">
              Freepik
            </a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
