import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShopPage = state => state.shoppage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  shoppage => shoppage.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectShopPageCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
