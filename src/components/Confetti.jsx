import ConfettiExplosion from "react-confetti-explosion";

import React from "react";

const ConfettiComponent = () => {
  console.log("Confetti boom");
  return (
    <ConfettiExplosion
      colors={["#FFC700", "#FF0000", "#2E3191", "#41BBC7"]}
      height={"100vh"}
      width={1000}
      particleSize={6}
      particleCount={40}
    />
  );
};

export default ConfettiComponent;
