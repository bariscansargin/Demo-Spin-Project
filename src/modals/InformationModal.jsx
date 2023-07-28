import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-slate-900 opacity-40"></div>
  );
};

const ModalOverlay = ({ prize, closeHandler }) => {
  console.log(prize);
  return (
    <div className="relative">
      <div className="fixed top-1/3 left-20 z-20 bg-white py-20 px-8 text-center rounded-lg shadow-lg shadow-slate-500 ">
        <header className="text-red-700 font-bold text-2xl italic">
          Prize Title
        </header>
        <h1>Congratulations You won this</h1>
        <footer>En kısa zamanda telefonunuza yüklenecektir.</footer>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
};
const InformationModal = ({ prize,informationCloseHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay prize={prize} closeHandler={informationCloseHandler} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default InformationModal;
