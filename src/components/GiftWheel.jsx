import React, { useState, useEffect, useRef } from "react";
//Components

import ConfettiComponent from "./Confetti";
import InformationModal from "../modal/InformationModal";
// Spin Package
import SpinAndWin from "react-spin-game";

// Config
import { prizes } from "../utils/prizes.config.json";
//Utils
import { setList } from "../utils/spinner-functions";
import { drawPrize } from "../utils/spinner-functions";
import { calculateNextSpin } from "../utils/date-functions";

const GiftWheel = () => {
  const [spinList, setSpinList] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [informationIsOpen, setInformationIsOpen] = useState(false);
  const [prizeObj, setPrizeObj] = useState(null);
  const [prize, setPrize] = useState("");
  const buttonRef = useRef(null);

  useEffect(() => {
    //Set Prize List
    if (spinList.length > 0) return;
    const prizeList = setList(prizes);
    setSpinList(prizeList);
  }, []);

  const selectPrize = async () => {
    const drawnPrize = drawPrize(prizes);

    if (!drawnPrize) {
      return Promise.reject(new Error("Prize not found."));
    }
    setPrizeObj(drawnPrize);
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
      setInformationIsOpen(true);
    }, 4000);
  };
  const informationCloseHandler = () => {
    setInformationIsOpen(false);
  };
  return (
    <div>
      {spinList.length > 0}
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
        <>
          <button
            className=" bg-white text-red-800 p-2 mt-2 rounded-lg shadow-lg text-md font-bold transition-all duration-300 ease-out"
            onClick={spinHandler}
            disabled={isSpinning}
          >
            SPIN
          </button>
        </>
      ) : (
        <>
          <p className="mt-8 text-white font-extrabold text-2xl">
            Next Spin Chance : {calculateNextSpin()}
          </p>
          <ConfettiComponent />
        </>
      )}
      {informationIsOpen && (
        <InformationModal
          prize={prizeObj}
          informationCloseHandler={informationCloseHandler}
        />
      )}
    </div>
  );
};

export default GiftWheel;
