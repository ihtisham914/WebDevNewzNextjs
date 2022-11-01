import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-20 mb-20">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-700">
        <span className="text-blue-500">WebDev</span> Newz
      </h1>
      <p className="mt-5 text-2xl md:text-3xl lg:text-3xl text-center">
        Here you can read interesting and upto date news
      </p>
    </div>
  );
};

export default Header;
