import { createSelector } from "reselect";

const selectShopPage = state => state.shoppage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  shoppage => shoppage.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopPageCollections],
    collections => collections[collectionUrlParam]
  );
