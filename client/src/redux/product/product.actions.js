import ProductActionTypes from "./product.types";

export const getProductStart = id => ({
  type: ProductActionTypes.GET_PRODUCT_START,
  id
});

export const getProductSuccess = product => ({
  type: ProductActionTypes.GET_PRODUCT_SUCCESS,
  payload: product
});

export const getProductFailure = error => ({
  type: ProductActionTypes.GET_PRODUCT_FAILURE,
  payload: error.message
});

// export const fetchProductStartAsync = () => {
//   const documentRef = firestore.doc('collections/' + collectionId + 'items' + itemId)
//   const snapshot = documentRef.get();
//   console.log(snapshot)
// }
