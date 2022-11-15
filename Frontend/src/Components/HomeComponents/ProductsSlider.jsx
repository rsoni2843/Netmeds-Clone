import React from "react";

import Category from "./Category";
// const axios = require('axios');
// import { getHome } from '../../API/api'
import Offers from "./Offers";
import PreviousOrders from "./PreviousOrders";
import TrendingToday from "./TrendingToday";
import { Hide } from "@chakra-ui/react";
// const apikey = `zMB0SbS5IFeqTk1B+Mu05HorvVodZID310bIls4VWFc=`
// const homeAPI =  'https://pharmeasy.in/apt-api/loyalty/fetchData?custom_token=home' ;

function ProductsSlider() {
  //  useEffect(()=>{

  //   getHome()
  //   .then(res=>console.log(res))
  //  },[])

  return (
    <div>
      <Category />
      <Offers />
      <Hide below="sm">
        <PreviousOrders />
      </Hide>
      <TrendingToday />
    </div>
  );
}

export default ProductsSlider;
