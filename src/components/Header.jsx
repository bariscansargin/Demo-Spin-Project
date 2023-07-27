import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-4 mb-4 gap-x-12">
      <h1 className="text-slate-700 font-extrabold text-2xl tracking-widest">
        GIFT WHEEL
      </h1>
      <img src="../src/assets/logo.png" alt="logo" className="w-32 h-18" />
    </header>
  );
};

export default Header;
