import React from "react";

import CartActionTypes from "./cart.types";
import cartReducer from "./cart.reducer";

const initialState = {
  hidden: true,
  cartItems: []
};

describe("cartReducer", () => {
  it("should return initial state", () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("should hide dropdown on toggle hidden", () => {
    expect(
      cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_DROPDOWN })
        .hidden
    ).toBe(false);
  });

  it()
});
