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

const initialState = {
  isLoading: false,
  isError: false,
  medProd: [],
  prodImg: [],
  medList: [],
  cartCount: [],
  query: "",
};

function medicineReducer(state = initialState, action) {
  switch (action.type) {
    case MEDICINE_LOADING: {
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    }
    case MEDICINE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        medProd: action.payload.data[0],
        prodImg: action.payload,
      };
    }
    case MEDICINE_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case MEDLIST_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case MEDLIST_SUCCESS: {
      return {
        ...initialState,
        isLoading: false,
        isError: false,
        medList: action.payload.data,
        query: action.payload.query.q,
      };
    }
    case MEDLIST_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case CART_LOADING: {
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    }
    case CART_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        cartCount: [...state.cartCount, action.payload],
      };
    }
    case CART_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
export { medicineReducer };
