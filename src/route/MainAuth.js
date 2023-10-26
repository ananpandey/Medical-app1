import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainAuth = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default MainAuth;
