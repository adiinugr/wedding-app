import React from "react";

import Roses from "../assets/images/roses.jpg";
import { GoBook } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";

const HomePage = () => {
  return (
    <div>
      {/* hero */}
      <section className="h-screen relative">
        <img
          className="object-cover h-full w-full absolute"
          src={Roses}
          alt="mawar"
        />
        <div className="absolute bg-white opacity-80 left-1/2 top-1/2 centered-element w-11/12 md:w-4/5 flex flex-col items-center justify-center py-10 rounded-3xl">
          <div className="font-body text-xl md:text-2xl mb-3">
            We Are Getting Married
          </div>
          <div className="font-display text-5xl md:text-6xl mb-3">
            Adi & Metta
          </div>
          <div className="font-body text-xl">2 April 2021</div>
        </div>
      </section>

      {/* surah arrum */}
      <section className="bg-gray-800 py-16 flex flex-col items-center justify-center">
        <div className="w-3/4 flex flex-col items-center justify-center">
          <GoBook size={100} className="text-gray-300 mb-4" />
          <p className="text-center text-gray-300 mb-2 ">
            “Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya
            untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
            tenteram di samping-Nya dan dijadikan-Nya rasa kasih dan sayang di
            antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan
            Allah bagi kaum yang berpikir.”
          </p>
          <p className="text-gray-300 font-medium">(QS. Ar-Rum ayat 21)</p>
        </div>
      </section>

      {/* nama pengantin */}
      <section className="bg-gray-800 py-16 flex flex-col items-center justify-center">
        <div className="w-3/4 border-gray-300 border-4 rounded-lg relative h-screen md:h-44">
          <img
            className="object-cover h-full w-full absolute rounded-lg"
            src={Roses}
            alt="mawar"
          />
          <div className="absolute bg-black h-full w-full z-10 opacity-70" />
          <div className="absolute flex flex-col md:flex-row items-center justify-center h-full w-full z-20">
            <div className="text-gray-300 w-1/3 text-center font-body mb-8 md:mb-0">
              <p className="font-display text-5xl mb-3">Adi</p>
              <p>Adi Nugroho</p>
              <p>Putra dari Bapak dan Ibu</p>
            </div>
            <div className="text-gray-300 w-1/3 text-center font-display text-8xl mb-8 md:mb-0">
              &
            </div>
            <div className="text-gray-300 w-1/3 text-center font-body">
              <p className="font-display text-5xl mb-3">Metta</p>
              <p>Metta Permatasari</p>
              <p>Putra dari Bapak dan Ibu</p>
            </div>
          </div>
        </div>
      </section>

      {/* countdown */}
      <section className="flex justify-center items-center bg-gray-500">
        <div className="w-3/4 flex flex-col py-8 md:py-10 md:px-44 text-gray-200">
          <div className="text-center font-display text-5xl mb-6">
            Save The Date
          </div>
          <div className="flex items-center justify-between font-body">
            <div className="text-center">
              <p className="text-3xl font-medium">29</p>
              <p>Day(s)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-medium">20</p>
              <p>Hour(s)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-medium">30</p>
              <p>Minute(s)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-medium">2</p>
              <p>Second(s)</p>
            </div>
          </div>
        </div>
      </section>

      {/* resepsi & akad */}
      <section className="bg-gray-800 py-16 flex flex-col items-center justify-center">
        <div className="w-3/4 border-gray-300 border-4 rounded-lg relative h-screen md:h-64">
          <img
            className="object-cover h-full w-full absolute rounded-lg"
            src={Roses}
            alt="mawar"
          />
          <div className="absolute bg-black h-full w-full z-10 opacity-70" />
          <div className="absolute flex flex-col md:flex-row items-center justify-center h-full w-full z-20">
            <div className="text-gray-300 w-1/2 text-center font-body mb-8 md:mb-0">
              <p className="font-display text-5xl mb-4">Akad Nikah</p>
              <p>Jumat, 2 April 2021</p>
              <p className="my-4">Pukul 08.30 WIB</p>
              <p className="font-semibold">Masjid Baitul Makmur 2 Unesa</p>
              <p>Kampus Unesa Lidah Wetan, Surabaya</p>
            </div>
            <div className="text-gray-300 w-1/2 text-center font-body mb-8 md:mb-0">
              <p className="font-display text-5xl mb-4">Resepsi</p>
              <p>Jumat, 2 April 2021</p>
              <p className="my-4">Pukul 13.30 WIB - Selesai</p>
              <p className="font-semibold">Danau Unesa</p>
              <p>Kampus Unesa Lidah Wetan, Surabaya</p>
            </div>
          </div>
        </div>
        <a
          href="https://www.google.co.id/maps/place/Masjid+Baitul+Makmur+2+UNESA+Lidah+Wetan/@-7.3034604,112.6708557,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fc53d3b94d03:0xa249469c90cd02b7!8m2!3d-7.3034604!4d112.6730444"
          target="_blank"
          rel="noreferrer"
          className="w-3/4 bg-gray-300 mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center"
        >
          <MdLocationOn size={20} /> Google Maps
        </a>
      </section>

      <section className="bg-gray-800 py-8 flex flex-col items-center justify-center">
        <div className="text-center text-gray-300">
          <p className="font-body text-lg mb-3">Thank You</p>
          <p className="font-display text-4xl">Adi & Metta</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
