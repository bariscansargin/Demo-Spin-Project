import Confetti from "react-confetti-boom";

import React from "react";

const ConfettiComponent = () => {
  return (
    <Confetti
      x={0.5}
      y={0.3}
      particleCount={200}
      deg={270}
      shapeSize={8}
      spreadDeg={45}
      effectInterval={2000}
      effectCount={10}
      colors={["#ff577f", "#ff884b", "#ffd384", "#fff9b0", "#3498db"]}
    />
  );
};

export default ConfettiComponent;
