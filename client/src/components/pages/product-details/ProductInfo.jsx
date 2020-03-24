import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { addItemToCart, removeItem } from "../../../redux/cart/cart.actions";

import { AddButton } from "./ProductDetailsStyles";

const ProductInfo = ({ item, addItem, removeItem, cartItems }) => {
  console.log(cartItems)
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
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        {/* <span className="value">{quantity}</span> */}
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <AddButton onClick={() => addItem(item)}>Add To Cart</AddButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
