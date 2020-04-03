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

  it("should increment quantity of matching item by 1 if addItemToCart action fired with same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_ITEM_TO_CART,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it("should decrease quantity of matching item by 1 if removeItem action fired with same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it("should remove item from cart if clearItemFromCart action fired with payload of existing item", () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems.includes(item => item.id === 1)
    ).toBe(false);
  });

  it("should clear cart if clearCart action fired", () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 }
      ]
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_CART
      }).cartItems.length
    ).toBe(0);
  });
});
