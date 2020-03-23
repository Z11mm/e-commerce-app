import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";
import { addItemToCart } from "../../../redux/cart/cart.actions";
import { selectItem } from "../../../redux/shop/shoppage.selectors";

import { ProductImage, ProductDetailsWrapper, AddButton } from "./ProductDetailsStyles";

const ProductDetails = ({ fetchCollectionsStart, match, item, addItem }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  const { name, price, imageUrl } = item;
  return (
    <ProductDetailsWrapper>
      <ProductImage imageUrl={imageUrl} />
      <div>
        <h2>{name}</h2>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae, impedit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis, fugit.
        </p>
        <p>Price: ${price}</p>
        <AddButton onClick={() => addItem(item)}>
          Add To Cart
        </AddButton>
      </div>
    </ProductDetailsWrapper>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
