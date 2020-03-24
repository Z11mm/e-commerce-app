import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";
import { selectItem } from "../../../redux/shop/shoppage.selectors";

import ProductInfo from './ProductInfo'

import {
  ProductImage,
  ProductDetailsWrapper,
  AddButton
} from "./ProductDetailsStyles";

const ProductDetails = ({ fetchCollectionsStart, match, item, addItem }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  const { name, price, imageUrl } = item;
  return (
    <ProductDetailsWrapper>
      <ProductImage imageUrl={imageUrl} />
      <ProductInfo item={item} />
    </ProductDetailsWrapper>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  // addItem: item => dispatch(addItemToCart(item)),
  // removeItem: item => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
