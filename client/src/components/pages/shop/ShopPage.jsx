import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";

import ErrorBoundary from "../../error-boundary/ErrorBoundary";

const CollectionOverviewContainer = lazy(() =>
  import("../../collection-overview/CollectionOverviewContainer")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/CollectionContainer")
);
const ProductDetailsContainer = lazy(() =>
  import("../../pages/product-details/ProductDetailsContainer")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <ErrorBoundary>
        <Suspense>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          <Route
            path={`${match.path}/:collectionId/:productId`}
            component={ProductDetailsContainer}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
