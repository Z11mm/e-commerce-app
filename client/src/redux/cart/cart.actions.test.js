import React from "react";

import CartActionTypes from "./cart.types";
import {
  toggleCartDropdown,
  addItemToCart,
  removeItem,
  clearCart,
  clearItemFromCart
} from "./cart.actions";

describe("handles toggleCartDropdown", () => {
  it("creates an action to toggle cart dropdown", () => {
    const action = toggleCartDropdown();
    expect(action.type).toEqual(CartActionTypes.TOGGLE_CART_DROPDOWN);
  });
});

describe("handles addItemToCart", () => {
  it("creates an action to add item to cart", () => {
    const mockItem = {
      name: 'blue hat',
      price: 50
    }
    const action = addItemToCart(mockItem);
    expect(action.type).toEqual(CartActionTypes.ADD_ITEM_TO_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("handles removeItem", () => {
  it("creates an action to remove item to cart", () => {
    const mockItem = {
      name: 'blue hat',
      price: 50
    }
    const action = removeItem(mockItem);
    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("handles clearCart", () => {
  it("creates an action to clear cart", () => {
    const action = clearCart();
    expect(action.type).toEqual(CartActionTypes.CLEAR_CART);
  });
});

describe("handles clearItemFromCart", () => {
  it("creates an action to clear items in cart", () => {
    const mockItem = {
      name: "blue hat",
      price: 50
    };
    const action = clearItemFromCart(mockItem);
    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem)
  });
});
