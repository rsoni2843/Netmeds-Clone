import {
  CART_ERROR,
  CART_LOADING,
  CART_SUCCESS,
  CATEGORY_ERROR,
  CATEGORY_LOADING,
  CATEGORY_SUCCESS,
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
  categoryData: [],
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
        medList: action.payload,
        // query: action.payload.query.q,
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
    case CATEGORY_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case CATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        categoryData: [...action.payload],
      };
    }
    case CATEGORY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
}
export { medicineReducer };
