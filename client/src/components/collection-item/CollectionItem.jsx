import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addItemToCart } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItemStyles";

const CollectionItem = ({ item, addItem}) => {
  const {name, price, imageUrl } = item;

  return (
    <Link to="/product">
      <CollectionItemContainer>
        <BackgroundImage
          className="image"
          imageUrl={imageUrl}
        />
      
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
