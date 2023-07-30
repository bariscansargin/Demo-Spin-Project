import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-4 mt-2  gap-y-8 gap-x-12 mb-20 min-[382px]:pt-0 sm:mb-4 min-[380px]:mb-4 min-[465px]:flex-row lg:mt-6 lg:mb-12 ">
      <h1 className="text-white text-4xl font-extrabold tracking-widest min-[465px]:text-xl lg:text-2xl">
        GIFT WHEEL
      </h1>

      <img src="../src/assets/logo.png" alt="logo" className="w-32 h-18 sm:w-24 h-16 lg:w-32 h-18" />
    </header>
  );
};

export default Header;
