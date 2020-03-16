import React from "react";
import { connect } from "react-redux";

// import { getProductStart } from "../../../redux/product/product.actions";

import { selectCollectionsForPreview } from "../../../redux/shop/shoppage.selectors";

const ProductDetails = ({ match, productItem }) => {
  console.log(productItem)
  // useEffect(() => {
  //   getProductStart(productId);
  //   // const product = getProductStart();
  //   // console.log(product)
  // }, []);
  return (
    <div>
      <h2>ProductDetails</h2>
      <div>Product Image</div>
      <div>Product Info</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  productItem: selectCollectionsForPreview
});

export default connect(mapStateToProps)(ProductDetails);
