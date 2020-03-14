import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
  product: null,
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
        isFetching: false,
        product: action.payload
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