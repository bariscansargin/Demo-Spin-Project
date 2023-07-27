import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    const prizeList = setList(prizes);
    setSpinList(prizeList);
  }, []);

  return (
    <div className="w-[600px] h-[550px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto rounded-lg mb-4 flex flex-col gap-y-2 items-center justify-center">
      {spinList.length !== 0 ? (
        <>
          <SpinAndWin
            data={spinList}
            result="test5"
            fontSize={23}
            horizantalText={false}
          />
          <h1 className="text-xl text-blue-800 font-bold">Click Spin Button</h1>
        </>
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
};

export default GiftWheel;
