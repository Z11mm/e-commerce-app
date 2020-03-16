/* eslint-disable import/no-unresolved */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopPageReducer from "./shop/shoppage.reducer";
import productReducer from './product/product.reducer'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shoppage: shopPageReducer,
  product: productReducer
});

export default persistReducer(persistConfig, rootReducer);
