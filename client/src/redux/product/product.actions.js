import * as types from "./product.types";

export const getProductStart = (id) => ({
  type: types.GET_PRODUCT_START
});

export const getProductSuccess = product => ({
  type: types.GET_PRODUCT_SUCCESS,
  payload: product
});

export const getProductFailure = errorMessage => ({
  type: types.GET_PRODUCT_FAILURE,
  payload: error.message
});

// export const fetchProductStartAsync = () => {
//   const documentRef = firestore.doc('collections/' + collectionId + 'items' + itemId)
//   const snapshot = documentRef.get();
//   console.log(snapshot)
// }
