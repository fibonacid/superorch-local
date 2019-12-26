import { actionTypes } from "../actionTypes";
import {
  appendScQuery,
  createScQuery,
  deleteScQuery,
  updateScQuery
} from "./index";

describe("createScQuery action", () => {
  it("should create an action to create a supercollider query", () => {
    const scqId = 0;
    const scqData = {};
    const expectedAction = {
      type: actionTypes.CREATE_SC_QUERY,
      scqId,
      scqData
    };
    expect(createScQuery(scqId, scqData)).toEqual(expectedAction);
  });
});

describe("deleteScQuery action", () => {
  it("should create an action to delete a specific supercollider query", () => {
    const scqId = 0;
    expect(deleteScQuery(scqId)).toEqual({
      type: actionTypes.DELETE_SC_QUERY,
      scqId
    });
  });
});

describe("updateScQuery action", () => {
  it("should create an action to update a supercollider query", () => {
    const scqId = 0;
    const scqData = {};
    const expectedAction = {
      type: actionTypes.UPDATE_SC_QUERY,
      scqId,
      scqData
    };
    expect(updateScQuery(scqId, scqData)).toEqual(expectedAction);
  });
});

describe("appendScQuery action", () => {
  it("should create an action to append a supercollider query", () => {
    const scqData = {};
    const expectedAction = {
      type: actionTypes.APPEND_SC_QUERY,
      scqData
    };
    expect(appendScQuery(scqData)).toEqual(expectedAction);
  });
});
