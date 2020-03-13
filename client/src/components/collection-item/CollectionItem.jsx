import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router'

// import { addItemToCart } from "../../redux/cart/cart.actions";
import { getProductStart } from '../../redux/product/product.actions'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItemStyles";

const CollectionItem = ({ item, getProduct }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage to=`product/${id}`
        className="image"
        imageUrl={imageUrl}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      {/* <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton> */}
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  // addItem: item => dispatch(addItemToCart(item))
  getProduct: (id) => dispatch(getProductStart(id))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
