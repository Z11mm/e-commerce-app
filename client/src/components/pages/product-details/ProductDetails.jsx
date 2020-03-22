import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";
import { selectItem } from "../../../redux/shop/shoppage.selectors";
import { ProductImage, ProductDetailsWrapper } from "./ProductDetailsStyles";

const ProductDetails = ({ fetchCollectionsStart, match, item }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  const { name, price, imageUrl } = item;
  return (
    <ProductDetailsWrapper>
      {/* <h2>ProductDetails</h2> */}
      <ProductImage imageUrl={imageUrl} />
      <div>
        <h2>Product Info:</h2>
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </ProductDetailsWrapper>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
