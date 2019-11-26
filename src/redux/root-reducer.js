/* eslint-disable import/no-unresolved */
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer
});
