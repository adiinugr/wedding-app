import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Roses from "../assets/images/roses.jpg";
import MusicFile from "../assets/musics/beautiful-in-white.mp3";
import { Link } from "react-router-dom";

export const pageTransition = {
  transition: "linier",
  duration: 0.8,
};

const OpenInvitation = () => {
  const [audio] = useState(new Audio(MusicFile));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, playing]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
      className="absolute h-screen w-full "
    >
      <img
        className="absolute object-cover h-full w-full "
        src={Roses}
        alt="mawar"
      />
      <div className="absolute text-gray-200 left-1/2 top-1/2 centered-element w-11/12 md:w-4/5 flex flex-col items-center justify-center py-10">
        <div className="font-body font-semibold text-xl md:text-2xl mb-3">
          You're Invited!
        </div>
        <div className="font-body text-xl md:text-2xl mb-3">
          The wedding celebration of
        </div>
        <div className="font-display text-5xl md:text-6xl mb-3">
          Adi & Metta
        </div>
        <Link
          to="/page"
          className="bg-white text-gray-900 w-full py-1 rounded-md text-center mt-4"
          onClick={() => setPlaying(true)}
        >
          <div>Open Invitation</div>
        </Link>
      </div>
    </motion.div>
  );
};

export default OpenInvitation;
