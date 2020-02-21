import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../../redux/shop/shoppage.selectors";

import WithSpinner from "../../with-spinner/WithSpinner";
import CollectionPage from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
