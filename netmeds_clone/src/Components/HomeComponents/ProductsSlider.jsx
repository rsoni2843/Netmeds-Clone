import React, { useEffect } from 'react' ;
import axios from 'axios'  ; 
// const axios = require('axios');
// import { getHome } from '../../API/api'
// const apikey = `zMB0SbS5IFeqTk1B+Mu05HorvVodZID310bIls4VWFc=`
const homeAPI =  'https://pharmeasy.in/apt-api/loyalty/fetchData?custom_token=home' ;


function ProductsSlider() {
   useEffect(()=>{
    fetch(homeAPI)
    .then(res=>res.json())
    .then(res=>console.log(res))
   },[])


  return (
    <div>Products</div>
  )
}

export default ProductsSlider