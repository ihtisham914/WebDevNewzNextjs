import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-white py-8 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          href={"/"}
          className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white"
        >
          <span class="text-blue-500">WebDev</span>
          Newz
        </Link>

        <div className="flex gap-6 w-full  md:w-auto" id="navbar-default">
          <Link
            href={"/"}
            className="block py-2 pr-4 pl-3 text-2xl font-semibold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="block py-2 pr-4 pl-3 text-2xl font-semibold text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
          >
            About
          </Link>
        </div>
      </div>
    </nav>
    // <div className="flex items-center justify-center p-5  w-100% bg-gray-400 gap-20 mb-5">
    //   <Link
    //     href={"/"}
    //     className="text-2xl p-3 bg-black text-white rounded-md font-medium hover:bg-gray-800  transition-all"
    //   >
    //     Home
    //   </Link>
    //   <Link
    //     href={"/about"}
    //     className="text-2xl p-3 bg-black text-white rounded-md font-medium hover:bg-gray-800  transition-all"
    //   >
    //     About
    //   </Link>
    // </div>
  );
};

export default NavBar;
