import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopPageCollections } from "../../../redux/shop/shoppage.selectors";

import CollectionPreview from "../../preview-collection/CollectionPreview";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopPageCollections
});

export default connect(mapStateToProps)(ShopPage);
