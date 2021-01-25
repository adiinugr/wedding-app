import { useState } from "react";

import Quote from "../assets/images/segmen.svg";
import HomeHeader from "../components/HomeHeader";

const AboutScreen = () => {
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
            <div className="md:w-1/2 mt-16 sm:mt-0 text-center flex-1 flex justify-end">
              <img src={Quote} width={400} height={400} alt="read" />
            </div>
            <div className="md:w-1/2 mt-16 md:mt-0 mb-4 sm:mb-16 md:mb-0">
              <p className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8">
                Tentang Website
                <span className="text-green-600"> Mathiaku</span>
              </p>
              <p className="mb-3">
                Website Mathiaku berisi kumpulan try out matematika dalam rangka
                persiapan menghadapi SBMPTN 2021. Try out nya sendiri akan di
                update rutin tiap pekan. Harapannya web ini bisa dijadikan
                sarana latihan dan asah kemampuan dalam mengerjakan soal.
              </p>
              <p className="mb-3">
                Bagi kamu yang sekarang sedang berjuang untuk lolos PTN,
                persiapkan semuanya dengan sebaik-bakinya. Selalu update
                informasi melalui web{" "}
                <a className="font-medium" href="https://ltmpt.ac.id/">
                  LTMPT
                </a>{" "}
                dan juga jangan lupa subscribe channel youtube{" "}
                <a
                  className="font-medium"
                  href="https://www.youtube.com/channel/UCeX7DGe8O4tuT6CZ529vMgg"
                >
                  {" "}
                  Mathiaku
                </a>
                . Tetap semangat dan pantang menyerah. Masa depanmu ada di
                tanganmu.
              </p>
              <p className="italic font-medium">~ Adi Nugroho</p>
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

export default AboutScreen;
