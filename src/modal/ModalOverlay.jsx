import React, { useEffect, useState } from "react";

//Gift Logo
import photo from "../assets/logo.png";
const ModalOverlay = ({ prize, closeHandler }) => {
  const [prizePhoto, setPrizePhoto] = useState(null);

  console.log(prize);

  useEffect(() => {
    if (prize.photo) {
      setPrizePhoto(prize.photo);
    } else {
      setPrizePhoto(photo);
    }
  }, []);
  return (
    <div className="fixed top-1/3 left-20 z-20 min-w-[70%] bg-white rounded-lg shadow-lg shadow-slate-500 flex flex-col">
      <header className="bg-slate-700 p-3">
        <h1 className="text-white text-3xl bold tracking-wide text-center">
          Congratulations
        </h1>
      </header>
      <main className="flex flex-col items-center bg-slate-600 py-2">
        {prizePhoto && (
          <img
            src={prizePhoto}
            alt="logo"
            className="w-32 h-24 rounded-lg mb-4"
          ></img>
        )}
        <p className="text-white bold text-xl mb-4">
          You won {prize.title}
        </p>
        <button
          onClick={closeHandler}
          className="text-white bg-red-600 hover:bg-red-500 p-2 rounded-lg"
        >
          Close
        </button>
      </main>
    </div>
  );
};

export default ModalOverlay;
