import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectItemsIntoLargeArray } from "../../../redux/shop/shoppage.selectors";

const ProductDetails = ({ match, items }) => {
  console.log(items);
  // const product = items.find(item => item.id === match.params.productId)
  // console.log(product)
  return (
    <div>
      <h2>ProductDetails</h2>
      <div>Product Image</div>
      <div>Product Info</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  items: selectItemsIntoLargeArray
});

export default connect(mapStateToProps)(ProductDetails);
// export default ProductDetails;
