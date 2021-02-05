import React, { createContext, useState } from "react";

export const AudioContext = createContext();

export const AudioContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <AudioContext.Provider value={[playing, setPlaying]}>
      {children}
    </AudioContext.Provider>
  );
};
