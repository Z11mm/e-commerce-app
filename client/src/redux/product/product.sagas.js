import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  getProductSuccess,
  getProductFailure
} from "../product/product.actions";

import ProductActionTypes from '../product/product.types'

import {
  firestore,
  convertProductSnapshotToMap
} from "../../firebase/firebase.utils";

export function* fetchProductAsync(id) {
  try {
    const collectionRef = firestore.collection('collections').doc();
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertProductSnapshotToMap,
      snapshot
    );
    yield put(getProductSuccess(collectionsMap));
  } catch (error) {
    yield put(getProductFailure(error.message));
  }
}

export function* fetchProductStart() {
  yield takeLatest(
    ProductActionTypes.GET_PRODUCT_START,
    fetchProductAsync
  );
}

export function* productSagas() {
  yield all([call(fetchProductStart)]);
}
