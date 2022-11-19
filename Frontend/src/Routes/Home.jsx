import { Box, Hide } from "@chakra-ui/react";
import React from "react";
import Category from "../Components/HomeComponents/Category";
import LimitedTimeDeal from "../Components/HomeComponents/LimitedTimeDeal";
import Offers from "../Components/HomeComponents/Offers";
import OriginNutrition from "../Components/HomeComponents/OriginNutrition";
import PreviousOrders from "../Components/HomeComponents/PreviousOrders";
import ShopCategory from "../Components/HomeComponents/ShopCategory";
// import ProductsSlider from '../Components/HomeComponents/ProductsSlider';
import TrendingToday from "../Components/HomeComponents/TrendingToday";
import Slider from "./../Components/HomeComponents/Slider";

function Home() {
  // {/* <ProductsSlider/> */}
  return (
    <Box>
      <Slider />

      <Category />
      <Hide below="sm">
        <Offers />
      </Hide>
      <Hide below="sm">
        <PreviousOrders />
      </Hide>
      <TrendingToday />
      {/* <Hide below="sm"> */}
      <LimitedTimeDeal />
      {/* </Hide> */}
      <Hide below="sm">
        <OriginNutrition />
      </Hide>
      <Hide below="sm">
        <ShopCategory />
      </Hide>
    </Box>
  );
}

export default Home;
