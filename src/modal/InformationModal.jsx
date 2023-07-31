import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
//Components
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
//DataConfig
import { checkPrizes } from "../utils/giftCheck.config.json";
//Utils
import { drawPrize } from "../utils/spinner-functions";

const InformationModal = ({ prize, informationCloseHandler }) => {
  const [userPrize, setUserPrize] = useState(null);

  useEffect(() => {
    if (prize.title === "Surprise") {
      const checkPrize = drawPrize(checkPrizes);
      setUserPrize(checkPrize);
    } else {
      setUserPrize(prize);
    }
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {userPrize &&
        ReactDOM.createPortal(
          <ModalOverlay prize={userPrize} closeHandler={informationCloseHandler} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default InformationModal;
