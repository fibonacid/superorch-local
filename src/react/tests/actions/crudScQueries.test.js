import { actionTypes } from "../../actions/actionTypes";
import {
  createScQuery,
  deleteScQuery,
  updateScQuery
} from "../../actions/crudScQueries";

describe("createScQuery action", () => {
  it("should create an action to create a supercollider query", () => {
    const scQuery = {};
    const expectedAction = {
      type: actionTypes.CREATE_SC_QUERY,
      scQuery
    };
    expect(createScQuery(scQuery)).toEqual(expectedAction);
  });
});

describe("deleteScQuery action", () => {
  it("should create an action to delete a specific supercollider query", () => {
    const id = 0;
    expect(deleteScQuery(id)).toEqual({
      type: actionTypes.DELETE_SC_QUERY,
      id
    });
  });
});

describe("updateScQuery action", () => {
  it("should create an action to update a supercollider query", () => {
    const id = 0;
    const data = {};
    const expectedAction = {
      type: actionTypes.UPDATE_SC_QUERY,
      id,
      data
    };
    expect(updateScQuery(id, data)).toEqual(expectedAction);
  });
});
