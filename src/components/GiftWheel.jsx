import React, { useState, useEffect, useRef } from "react";
//Components
import LoaderSpinner from "./LoaderSpinner";
// Spin Package
import SpinAndWin from "react-spin-game";
import "react-spin-game/dist/index.css";
// Config
import { prizes } from "../utils/prizes.config.json";
//Utils
import { setList } from "../utils/spin-functions";
const GiftWheel = () => {
  const [spinList, setSpinList] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const prizeList = setList(prizes);
    setTimeout(() => {
      setSpinList(prizeList);
    }, 1000);
  }, []);
  const spinHandler = () => {};
  return (
    <div className="w-[600px] h-[550px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto rounded-lg mb-4 flex flex-col gap-y-2 items-center justify-center">
      {spinList.length !== 0 ? (
        <>
          <SpinAndWin
            data={spinList}
            result="250 SMS"
            fontSize={23}
            horizantalText={false}
            ref={buttonRef}
            hideButton={true}
            fontFamily="fantasy"
          />
          {!isSpinning && (
            <button
              className=" bg-blue-600 hover:bg-blue-400 hover:text-black  p-2 mt-2 rounded-lg text-white shadow-lg text-md font-bold transition-all duration-300 ease-out"
              onClick={() => {
                spinHandler();
                buttonRef.current.handleSpin();
              }}
            >
              Click for Spin
            </button>
          )}
        </>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default GiftWheel;
