import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItemStyles";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <Link to={{ pathname: `/product/${id}` }}>
      <CollectionItemContainer>

          <BackgroundImage
            className="image"
            imageUrl={imageUrl}
            // onClick={() => history.push(`${match.path}/${id}`)}
          />

        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    </Link >
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
