import React from "react";
import { connect } from "react-redux";
// import { Route } from "react-router-dom";

import { selectCollection } from "../../../redux/shop/shoppage.selectors";

import CollectionItem from "../../collection-item/CollectionItem";
// import ProductDetails from "../../pages/product-details/ProductDetails";

import "./collection.styles.scss";



const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection;
  console.log(items);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
