import { combineReducers } from "redux";
import userReducer from "./userReducer";
import employeeReducer from "./employeeReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  user: userReducer,
  employee: employeeReducer,
  loader: loadingReducer
});
