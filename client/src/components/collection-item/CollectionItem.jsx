import React from "react";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";

// import { addItemToCart } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItemStyles";

const CollectionItem = ({ item, addItem, match, history }) => {
  const { id, name, price, imageUrl } = item;

  return (
    // <Link to={{ pathname: `product/${id}` }}>
      <CollectionItemContainer onClick={() => history.push(`${match.url}/${id}`)}>
        <BackgroundImage className="image" imageUrl={imageUrl} />

        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add To Cart
        </AddButton>
      </CollectionItemContainer>
    // </Link>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItemToCart(item))
// });

export default withRouter(CollectionItem);
