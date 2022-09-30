import { Box, Hide } from "@chakra-ui/react";
import React from "react";
import Category from "../Components/HomeComponents/Category";
import LimitedTimeDeal from "../Components/HomeComponents/LimitedTimeDeal";
import Offers from "../Components/HomeComponents/Offers";
import PreviousOrders from "../Components/HomeComponents/PreviousOrders";
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
      <LimitedTimeDeal />
    </Box>
  );
}

export default Home;
