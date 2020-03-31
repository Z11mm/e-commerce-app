import React from "react";
import shopActionTypes from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

describe("handles fetchCollectionsStart action", () => {
  it("should create an action to start fetch collections", () => {
    const expectedAction = {
      type: shopActionTypes.FETCH_COLLECTIONS_START
    };
    expect(fetchCollectionsStart().type).toEqual(expectedAction.type);
  });
});

describe("handles fetchCollectionsSuccess action", () => {
  it("should create an action to fetch collections", () => {
    const mockCollectionsMap = {
      sneakers: {
        id: 1,
        price: 350
      }
    };
    const action = fetchCollectionsSuccess(mockCollectionsMap);
    expect(action.type).toEqual(shopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('handles fetchCollectionsFailure action', () => {
  it("should create an action for when fetch collections fail", () => {
    const errorMessage = 'oops'
    const action = fetchCollectionsFailure(errorMessage)
    expect(action.type).toEqual(shopActionTypes.FETCH_COLLECTIONS_FAILURE)
    expect(action.payload).toEqual(errorMessage)
  })
})

