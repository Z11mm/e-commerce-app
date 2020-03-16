import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  getProductSuccess,
  getProductFailure
} from "../product/product.actions";

import ProductActionTypes from "../product/product.types";

import { firestore } from "../../firebase/firebase.utils";

export function* fetchProductAsync() {
  try {
    const collectionRef = firestore.collection("collections").doc("CGb4B5EeLUjiHhi7Hwce");
    const snapshot = yield collectionRef.get();
    console.log(snapshot.data());
    
    // const productsArray = snapshot.data()
    // yield put(getProductSuccess(collectionsMap));
  } catch (error) {
    // yield put(getProductFailure(error.message));
    console.log(error);
  }
}

export function* fetchProductStart() {
  yield takeLatest(ProductActionTypes.GET_PRODUCT_START, fetchProductAsync);
}

export function* productSagas() {
  yield all([call(fetchProductStart)]);
}
