import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";
import { selectItem } from "../../../redux/shop/shoppage.selectors";


const ProductDetails = ({ fetchCollectionsStart, match, item }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // const selectedProduct = items[match.params.productId];
  console.log(item)
  const { name, price, imageUrl } = item;
  return (
    <div>
      <h2>ProductDetails</h2>
      <div>Product Image: {name} </div>
      <div>Product Info: </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
