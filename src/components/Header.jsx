import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-4  gap-y-8 mb-36">
      <h1 className="text-slate-600 font-extrabold text-2xl tracking-widest">
        GIFT WHEEL
      </h1>

      <img src="../src/assets/logo.png" alt="logo" className="w-32 h-18" />
    </header>
  );
};

export default Header;
