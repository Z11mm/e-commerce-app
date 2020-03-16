import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import ProductDetails from '../pages/product-details/ProductDetails'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItemStyles";

const CollectionItem = ({ item, addItem, match, history }) => {
  // console.log(match)
  const { id, name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        imageUrl={imageUrl}
      />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => history.push(`${match.path}/${id}`)} inverted>
        View Product
      </AddButton>
      {/* <Route
        exact
        path={`${match.path}/:productId`}
        component={ProductDetails}
      /> */}
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
