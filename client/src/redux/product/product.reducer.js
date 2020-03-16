import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
  currentProduct: null,
  isFetching: false,
  error: null
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT_START:
      return {
        ...state,
        isFetching: true
      };
    case ProductActionTypes.GET_PRODUCT_SUCCESS:
      return {
        product: action.payload,
        isFetching: false  
      };
    case ProductActionTypes.GET_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default productReducer;