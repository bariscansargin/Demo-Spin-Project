import React, { useState, useEffect, useRef } from "react";
//Components
import LoaderSpinner from "./LoaderSpinner";
import ConfettiComponent from "./Confetti";
// Spin Package
import SpinAndWin from "react-spin-game";
import "react-spin-game/dist/index.css";
// Config
import { prizes } from "../utils/prizes.config.json";
//Utils
import { setList } from "../utils/spinner-functions";
import { drawPrize } from "../utils/spinner-functions";
import { calculateNextSpin } from "../utils/date-functions";

const GiftWheel = () => {
  const [spinList, setSpinList] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState("");
  const buttonRef = useRef(null);

  useEffect(() => {
    //Set Prize List
    if (spinList.length > 0) return;
    const prizeList = setList(prizes);
    setTimeout(() => {
      setSpinList(prizeList);
    }, 1000);
  }, []);

  const selectPrize = async () => {
    const drawnPrize = drawPrize(prizes);

    if (!drawnPrize) {
      return Promise.reject(new Error("Prize not found."));
    }

    setPrize(drawnPrize.title);

    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  };

  const spinHandler = async () => {
    setIsSpinning(true);
    await selectPrize();
    buttonRef.current.handleSpin();
    setTimeout(() => {
      setIsSpinning(false);
    }, 4000);
  };
  return (
    <div className="w-[600px] h-[550px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto rounded-lg mb-4 flex flex-col gap-y-2 items-center justify-center">
      {spinList.length !== 0 ? (
        <>
          <SpinAndWin
            data={spinList}
            result={prize}
            fontSize={23}
            horizantalText={false}
            ref={buttonRef}
            hideButton={true}
            fontFamily="fantasy"
          />
          {!isSpinning && prize.trim().length === 0 ? (
            <button
              className=" bg-blue-600 hover:bg-blue-400 hover:text-black  p-2 mt-2 rounded-lg text-white shadow-lg text-md font-bold transition-all duration-300 ease-out"
              onClick={spinHandler}
              disabled={isSpinning}
            >
              SPIN
            </button>
          ) : (
            <>
              <p className="mt-4 text-slate-900 font-bold text-xl italic">
                Next Spin Chance : {calculateNextSpin()}
              </p>
              <ConfettiComponent />
            </>
          )}
        </>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default GiftWheel;
