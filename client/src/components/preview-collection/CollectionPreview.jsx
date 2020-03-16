import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/CollectionItem";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreviewStyles";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  const products = Object.keys(items).map(key => items[key]);
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {products
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
