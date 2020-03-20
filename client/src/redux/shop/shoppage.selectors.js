import { createSelector } from "reselect";

const selectShopPage = state => state.shoppage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  shoppage => shoppage.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopPageCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectShopPageCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

// transform collection into an array of arrays
export const selectCollectionItems = createSelector(
  [selectCollectionsForPreview],
  collections =>
    collections.map(collection =>
      Object.keys(collection).map(key => collection[key])
    )
);

// flatten array of arrays
export const selectCollectionIntoLargeArray = createSelector(
  [selectCollectionItems],
  collections => [].concat(...collections)
);

// filter flattened array for items object
export const selectItemsObject = createSelector(
  [selectCollectionIntoLargeArray],
  collection => collection.filter(item => typeof item === "object")
);

// transform filtered items object array into an array of arrays
export const selectCollectionItemsArray = createSelector(
  [selectItemsObject],
  collections =>
    collections.map(collection =>
      Object.keys(collection).map(key => collection[key])
    )
);

// flatten items array of arrays
export const selectItemsIntoLargeArray = createSelector(
  [selectCollectionItemsArray],
  collections => [].concat(...collections)
);

// transform large array to object
export const selectItemsIntoObject = createSelector(
  [selectItemsIntoLargeArray],
  items => items.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {})
)

export const selectItem = productUrlParam =>
  createSelector([selectItemsIntoObject], items =>
    items ? items[productUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShopPage],
  shoppage => shoppage.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopPage],
  shoppage => !shoppage.collections
);
