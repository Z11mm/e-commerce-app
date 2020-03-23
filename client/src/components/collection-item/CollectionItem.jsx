import React from "react";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./CollectionItemStyles";

const CollectionItem = ({ item, match, history }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        imageUrl={imageUrl}
      />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
