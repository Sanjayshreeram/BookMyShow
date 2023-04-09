import React from "react";

import Navbar from "./navbar.js";
import { Outlet } from "react-router-dom";
import Herocarousal from "./carousals/herocarousal.js";


//components
//import Navbar from "../components/Navbar/navbar.component";
//import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";

const DefaultLayout = (props) => {
  return (
    <>
    <Herocarousal/>
   <Navbar/>
    <Outlet/>
    </>
  );
};

export default DefaultLayout;
