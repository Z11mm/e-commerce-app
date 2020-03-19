import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectItemsIntoLargeArray } from "../../../redux/shop/shoppage.selectors";

const ProductDetails = ({ match, items }) => {
  console.log('products log', match,items)
  const products = items.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
  const selectedProduct = products[match.params.productId];
  console.log(selectedProduct);
  const { name, price, imageUrl } = selectedProduct;
  return (
    <div>
      <h2>ProductDetails</h2>
      <div>Product Image: {imageUrl}</div>
      <div>Product Info: {price}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectItemsIntoLargeArray
});

export default connect(mapStateToProps)(ProductDetails);
