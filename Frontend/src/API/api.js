import axios from "axios";
import { create } from "apisauce";

// const homeAPI = `https://pharmeasy.in/apt-api/loyalty/fetchData?custom_token=home`;
const paymentOfferAPI = "https://pharmeasy.in/apt-api/paymentOffers";
const privateLabelAPI = "https://pharmeasy.in/api/home/fetchCategories";
const trendingAPI =
  "https://mobile.medplusindia.com/mobilemvc/profile/getNotifications.mbl?tokenId=034B565EAEC74FBCCEA86C1CCEECF742&isCordova=false&isPhonepeSwitch=false&SESSIONID=034B565EAEC74FBCCEA86C1CCEECF742";
const originNutrition =
  "https://pharmeasy.in/api/otc/getCategoryProducts?categoryId=623";
// const categoryAPI = 'https://pharmeasy.in/api/otc/getCategoryProducts?perPage=30'
const medicineAPI = "https://pharmeasy.in/apt-api/search/search";

function getHome() {
  return axios.get(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(
      `https://pharmeasy.in/apt-api/loyalty/fetchData?custom_token=home`
    )}`
  );
}

function getOffer() {
  return axios.get(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(paymentOfferAPI)}`
  );
}
function getTrending() {
  return axios.get(trendingAPI);
}
function getPrivate() {
  return axios.get(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(privateLabelAPI)}`
  );
}
function getNutrition() {
  return axios.get(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(originNutrition)}`
  );
}
function getMedicine(data) {
  return axios.get(medicineAPI, {
    params: {
      q: data,
    },
  });
}
function getCategory(ep, filter) {
  return fetch(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(
      `https://pharmeasy.in/api/otc/getCategoryProducts?perPage=30&categoryId=${ep}&sort=${filter.sort}&direction=${filter.direction}`
    )}`
  ).then((res) => {
    return res.json();
  });
}

function getMedicineApollo(data) {
  return axios.get(
    "https://search.sastasundar.com/search_list?token=oo7lio7l4o7l6o7l9o7looi",
    {
      params: {
        q: data,
      },
    }
  );
}
export {
  getMedicineApollo,
  getHome,
  getOffer,
  getTrending,
  getPrivate,
  getNutrition,
  getMedicine,
  getCategory,
};
