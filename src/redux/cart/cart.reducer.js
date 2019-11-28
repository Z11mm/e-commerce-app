import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state;
  }
};

export default cartReducer;
