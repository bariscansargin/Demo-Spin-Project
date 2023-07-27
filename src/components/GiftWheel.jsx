import SpinAndWin from "react-spin-game";
import "react-spin-game/dist/index.css";

const GiftWheel = () => {
  const freeSpinGifts = [
    ["test1", "red"],
    ["test2", "black"],
    ["test3", "#808080"],
    ["test4", "blue"],
    ["test5", "gray"],
    ["test6", "green"],
  ];
  return (
    <div className="w-[600px] h-[550px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto rounded-lg mb-4 flex flex-col gap-y-2 items-center justify-center">
      <SpinAndWin
        data={freeSpinGifts}
        result="test5"
        fontSize={23}
        horizantalText={true}
      />
      <h1 className="text-xl text-blue-800 font-bold">Click Spin Button</h1>
    </div>
  );
};

export default GiftWheel;
