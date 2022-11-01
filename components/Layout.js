import React from "react";
import NavBar from "./NavBar";

const Layout = ({ childern }) => {
  return (
    <>
      <NavBar />
      <div>{childern}</div>
    </>
  );
};

export default Layout;
