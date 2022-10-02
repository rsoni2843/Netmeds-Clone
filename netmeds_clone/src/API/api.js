import axios from "axios";
// Home API
const homeAPI = `https://pharmeasy.in/apt-api/loyalty/fetchData?custom_token=home`;
const paymentOfferAPI = "https://pharmeasy.in/apt-api/paymentOffers";
// const privateLabelAPI = 'https://pharmeasy.in/apt-api/privateLabelBanner' ;
const privateLabelAPI = "https://pharmeasy.in/api/home/fetchCategories";
const trendingAPI =
  "https://mobile.medplusindia.com/mobilemvc/profile/getNotifications.mbl?tokenId=034B565EAEC74FBCCEA86C1CCEECF742&isCordova=false&isPhonepeSwitch=false&SESSIONID=034B565EAEC74FBCCEA86C1CCEECF742";
// Medicine API
// Most IMP API
// https://pharmeasy.in/api/otc/getCategoryProducts?categoryId=8881

const originNutrition = 'https://pharmeasy.in/api/otc/getCategoryProducts?categoryId=623'
const categoryAPI = 'https://pharmeasy.in/api/otc/getCategoryProducts'
const medicineAPI =
  "https://pharmeasy.in/apt-api/search/search";

function getHome() {
  return axios.get(homeAPI);
}
function getOffer() {
  return axios.get(paymentOfferAPI);
}
function getTrending() {
  return axios.get(trendingAPI);
}
function getPrivate() {
  return axios.get(privateLabelAPI);
}
function getNutrition(){
  return axios.get(originNutrition)
}
function getMedicine(data){
  console.log(data)
  return axios.get(medicineAPI,{
    params:{
      q:data
    }
  })
}
function getCategory(ep){
  return axios.get(categoryAPI,{
    params:{
      categoryId:ep
    }
  })
  
}
export { getHome, getOffer, getTrending, getPrivate, getNutrition, getMedicine, getCategory };

// <Box w={'98%'} m={'auto'} mt={8}>
//         <Text fontWeight={'bold'} fontSize={24} textAlign={'left'}>Payment Partner Offers</Text>
//         <Carousel
//         swipeable={false}
//         draggable={false}
//         // showDots={true}
//         responsive={responsive}
//         ssr={true} // means to render carousel on server-side.
//         infinite={true}
//         autoPlay={true}
//         customTransition={'transform 300ms ease-in-out'}
//         // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//         autoPlaySpeed={5000}
//         keyBoardControl={true}
//         // customTransition="all .5"
//         transitionDuration={5000}

//         containerClass="carousel-container"
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         // deviceType={this.props.deviceType}

//         itemClass="carousel-item-padding-40-px"
//         >
//             {/* <div>Item 1</div>
//             <div>Item 2</div>
//             <div>Item 3</div>
//             <div>Item 4</div> */}
//             <Box>One<Image src={'https://www.netmeds.com/images/cms/aw_rbslider/slides/1663913142_Skin-Elements_Mobile_home.jpg'}/></Box>
//             <Box>Two<Image src={'https://www.netmeds.com/images/cms/aw_rbslider/slides/1663176903_Eartho-essentials_Mobile_Home.jpg'}/></Box>
//             <Box>Three<Image src={'https://www.netmeds.com/images/cms/aw_rbslider/slides/1663913142_Skin-Elements_Mobile_home.jpg'}/></Box>
//             <Box>Four<Image src={'https://www.netmeds.com/images/cms/aw_rbslider/slides/1663913142_Skin-Elements_Mobile_home.jpg'}/></Box>

//         </Carousel>;
//     </Box>
