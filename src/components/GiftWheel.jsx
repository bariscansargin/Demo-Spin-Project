import { useState } from "react";
import SpinAndWin from "react-spin-game";
import "react-spin-game/dist/index.css";

const GiftWheel = () => {
  const freeSpinGifts = [
    ["test1", "red"],
    ["test2", "black"],
    ["test3", "#808080"],
    ["test4", "blue"],
    ["test5", "gray"],
    ["test6", "blue"],
  ];
  return <SpinAndWin data={freeSpinGifts}/>;
};

export default GiftWheel;
