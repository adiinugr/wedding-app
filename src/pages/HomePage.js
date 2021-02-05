import React, { useContext, useEffect, useState } from "react";

import Countdown from "react-countdown";
import { motion } from "framer-motion";

import { GoBook } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";

import { pageTransition } from "./OpenInvitation";
import { AudioContext } from "../context/AudioContext";

import Roses from "../assets/images/roses.jpg";
import MusicFile from "../assets/musics/beautiful-in-white.mp3";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="flex items-center justify-center font-body">
        <p className="text-xl md:text-3xl font-medium">2 Maret 2021</p>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between font-body">
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{days}</p>
          <p>Day(s)</p>
        </div>
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{hours}</p>
          <p>Hour(s)</p>
        </div>
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{minutes}</p>
          <p>Minute(s)</p>
        </div>
        <div className="text-center">
          <p className="text-xl md:text-3xl font-medium">{seconds}</p>
          <p>Second(s)</p>
        </div>
      </div>
    );
  }
};

const HomePage = () => {
  const [comments, setComments] = useState([
    {
      name: "Sugeng",
      comment: "Selamat ya! Semoga sakinah",
    },
  ]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const [audio] = useState(new Audio(MusicFile));
  const [playing, setPlaying] = useContext(AudioContext);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, playing]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" && comment === "") {
      setError("Harus diisi semua ya!");
    }

    setComments((prevComment) => [
      ...prevComment,
      {
        name,
        comment,
      },
    ]);
  };

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={pageTransition}
      className="absolute"
    >
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
      <section className="bg-gray-800 pb-16 flex flex-col items-center justify-center">
        <div className="w-5/6 md:w-3/4 border-gray-300 border-4 rounded-lg relative h-screen md:h-44">
          <img
            className="object-cover h-full w-full absolute rounded-lg"
            src={Roses}
            alt="mawar"
          />
          <div className="absolute bg-black h-full w-full z-10 opacity-70" />
          <div className="absolute flex flex-col md:flex-row items-center justify-center h-full w-full z-20">
            <div className="text-gray-300 md:w-1/3 text-center font-body mb-8 md:mb-0">
              <p className="font-display text-5xl mb-3">Adi</p>
              <p>Adi Nugroho</p>
              <p>Putra dari Bapak dan Ibu</p>
            </div>
            <div className="text-gray-300 md:w-1/3 text-center font-display text-8xl mb-8 md:mb-0">
              &
            </div>
            <div className="text-gray-300 md:w-1/3 text-center font-body">
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
          <div className="text-center font-display text-4xl md:text-5xl mb-6">
            Save The Date
          </div>
          <Countdown
            date={Date.parse("2021-03-02T08:30:00.000+07:00")}
            renderer={renderer}
          />
        </div>
      </section>

      {/* resepsi & akad */}
      <section className="bg-gray-800 py-16 flex flex-col items-center justify-center">
        <div className="w-5/6 md:w-3/4 border-gray-300 border-4 rounded-lg relative h-screen md:h-64">
          <img
            className="object-cover h-full w-full absolute rounded-lg"
            src={Roses}
            alt="mawar"
          />
          <div className="absolute bg-black h-full w-full z-10 opacity-70" />
          <div className="absolute flex flex-col md:flex-row items-center justify-center h-full w-full z-20">
            <div className="text-gray-300 px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0">
              <p className="font-display text-5xl mb-4">Akad Nikah</p>
              <p>Jumat, 2 April 2021</p>
              <p className="my-4">Pukul 08.30 WIB</p>
              <p className="font-semibold">Masjid Baitul Makmur 2 Unesa</p>
              <p>Kampus Unesa Lidah Wetan, Surabaya</p>
            </div>
            <div className="text-gray-300 px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0">
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
          className="w-5/6 md:w-3/4 bg-gray-300 mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center"
        >
          <MdLocationOn size={20} /> Google Maps
        </a>
      </section>

      {/* guest book */}
      <section className="bg-gray-400">
        <div className="flex flex-col items-center justify-center py-6">
          <div className="font-display text-4xl mb-4">Guest Book</div>
          <div className="border-gray-700 border-2 py-1 px-4 flex items-center justify-center font-body cursor-pointer">
            <AiOutlineComment size={20} />
            <div className="ml-2">Write your wish</div>
          </div>
        </div>
        <div className="w-4/5 border-gray-700 border-t-2 py-4 text-gray-900 mx-auto">
          {comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <p className="font-body font-semibold mb-1">{comment.name}</p>
              <p className="font-body">{comment.comment}</p>
            </div>
          ))}
          <form onSubmit={handleSubmit}>
            <div className="editor flex flex-col text-gray-800 max-w-2xl mt-6">
              {error && (
                <div className="mb-2 font-body text-red-800">
                  Harus diisi semua ya!
                </div>
              )}
              <input
                className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body"
                spellCheck="false"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <textarea
                className="bg-gray-100 p-3 h-60 border border-gray-300 outline-none font-body"
                spellCheck="false"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Describe your wish here"
              />

              <div className="buttons flex">
                <button
                  type="submit"
                  className="btn border p-1 px-4 font-body cursor-pointer text-gray-200 ml-auto mt-4 bg-gray-700"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* thank you */}
      <section className="bg-gray-800 py-8 flex flex-col items-center justify-center">
        <div className="text-center text-gray-300">
          <p className="font-body text-lg mb-3">Thank You</p>
          <p className="font-display text-4xl">Adi & Metta</p>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
