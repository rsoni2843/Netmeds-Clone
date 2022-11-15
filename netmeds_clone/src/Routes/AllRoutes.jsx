import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Medicine from "./Medicine";
import Result from "./Result";
import Ayurvedic from "../Components/CategoryPages/AllCategories/Ayurvedic";
import Ayush from "../Components/CategoryPages/AllCategories/Ayush";
import Eyewear from "../Components/CategoryPages/AllCategories/Eyewear";
import COVID from "../Components/CategoryPages/AllCategories/COVID";
import Homeopathy from "../Components/CategoryPages/AllCategories/Homeopathy";
import Fitness from "../Components/CategoryPages/AllCategories/Fitness";
import Mom from "../Components/CategoryPages/AllCategories/Mom";
import Surgical from "../Components/CategoryPages/AllCategories/Surgical";
import SexualWellness from "../Components/CategoryPages/AllCategories/SexualWellness";
import Treatment from "../Components/CategoryPages/AllCategories/Treatment";
import Devices from "../Components/CategoryPages/AllCategories/Devices";
import Diabetes from "../Components/CategoryPages/AllCategories/Diabetes";
import Beauty from "./../Components/CategoryPages/AllCategories/Beauty";
import LoginOG from "./LoginOG";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/medicine"} element={<Medicine />} />
        <Route path={"/medicine/:result"} element={<Result />} />
        {/* <Route path={"/Login"} element={<Login />} /> */}
        <Route path={"/Login"} element={<LoginOG />} />

        {/* <Route path={'category/:id'} element={<Categories/>}/> */}
        <Route path={"/ayurvedic"} element={<Ayurvedic />} />
        <Route path={"/diabetes"} element={<Diabetes />} />
        <Route path={"/ayush"} element={<Ayush />} />
        <Route path={"/eyewear"} element={<Eyewear />} />
        <Route path={"/covid_essentials"} element={<COVID />} />
        <Route path={"/homeopathy"} element={<Homeopathy />} />
        <Route path={"/fitness"} element={<Fitness />} />
        <Route path={"/mom&baby"} element={<Mom />} />
        <Route path={"/surgicals"} element={<Surgical />} />
        <Route path={"/treatment"} element={<Treatment />} />
        <Route path={"/sexual_wellness"} element={<SexualWellness />} />
        <Route path={"/devices"} element={<Devices />} />
        <Route path={"/beauty"} element={<Beauty />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
