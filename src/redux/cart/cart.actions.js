import CartActionTypes from "./cart.types";

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item
});
