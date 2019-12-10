import { createSelector } from "reselect";

const selectShopPage = state => state.shoppage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  shoppage => shoppage.collections
);
