import React from "react";
import { mockStore } from "../../../setUpTests";
import * as shopActionTypes from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

describe("handles fetch collections", () => {
  it("should create an action to start fetch collections", () => {
    const expectedAction = {
      type: shopActionTypes.FETCH_COLLECTIONS_START
    };
    expect(fetchCollectionsStart().type).toEqual(expectedAction);
  });
});
