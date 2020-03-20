import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../../redux/shop/shoppage.selectors";

import WithSpinner from "../../with-spinner/WithSpinner";
import ProductDetails from "../product-details/ProductDetails";

const mapStateToProps = createStructuredSelector({
  isLoading: state => selectIsCollectionsLoaded(state)
});

const ProductDetailsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductDetails);

export default ProductDetailsContainer;
