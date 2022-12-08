import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./Users/Login/login.reducer";
import signupReducer from "./Users/Signup/signup.reducer";
import { medicineReducer } from "./MedicineData/medicine.reducer";

export const store = legacy_createStore(
  combineReducers({
    signup: signupReducer,
    login: loginReducer,
    listData: medicineReducer,
  }),
  compose(applyMiddleware(thunk))
);
