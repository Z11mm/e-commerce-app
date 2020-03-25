import React from "react";
import { connect } from "react-redux";

import { addItemToCart, removeItem } from "../../../redux/cart/cart.actions";

import { AddButton } from "./ProductDetailsStyles";

const ProductInfo = ({ item, addItem }) => {
  // console.log(cartItems)
  const { name, price } = item;
  // const cartItem = cartItems.find(cartItem => cartItem.id === item.id)
  
  return (
    <div>
      <h2>{name}</h2>
      <p>
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae, impedit? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis, fugit.
      </p>
      <p className="price">${price}</p>
      <AddButton onClick={() => addItem(item)}>Add To Cart</AddButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(ProductInfo);
