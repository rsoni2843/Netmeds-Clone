import {
  CART_ERROR,
  CART_LOADING,
  CART_SUCCESS,
  MEDICINE_ERROR,
  MEDICINE_LOADING,
  MEDICINE_SUCCESS,
  MEDLIST_ERROR,
  MEDLIST_LOADING,
  MEDLIST_SUCCESS,
} from "./medicine.type";

export const getMedicineList = (info) => async (dispatch) => {
  dispatch({ type: MEDLIST_LOADING });
  try {
    fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://pharmeasy.in/api/search/search/?intent_id=1668676359932&q=${info}&page=1`
      )}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: MEDLIST_SUCCESS, payload: res });
        return res;
      });
  } catch (err) {
    console.log(err);
    dispatch({ type: MEDLIST_ERROR });
  }
};

export const getProductMedicine = (info) => async (dispatch) => {
  dispatch({ type: MEDICINE_LOADING });
  try {
    fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://pharmeasy.in/api/productDescription/fetchPreviouslyBrowsedItems?productIds[]=${info}`
      )}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: MEDICINE_SUCCESS, payload: res });
      });
  } catch (err) {
    dispatch({ type: MEDICINE_ERROR });
    console.log(err);
  }
};

export const getCart = (info) => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    dispatch({ type: CART_SUCCESS, payload: info });
  } catch (err) {
    console.error(err);
    dispatch({ type: CART_ERROR });
  }
};
