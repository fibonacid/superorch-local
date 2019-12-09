import { actionTypes } from "../../../actions/actionTypes";
import {
  c_createScQuery,
  c_deleteScQuery,
  c_updateScQuery
} from "../../../actions/client/crudScQueries";

describe("c_createScQuery action", () => {
  it("should create an action to create a supercollider query", () => {
    const scQueryId = 0;
    const scQueryData = {};
    const expectedAction = {
      type: actionTypes.C_CREATE_SC_QUERY,
      scQueryId,
      scQueryData
    };
    expect(c_createScQuery(scQueryId, scQueryData)).toEqual(expectedAction);
  });
});

describe("c_deleteScQuery action", () => {
  it("should create an action to delete a specific supercollider query", () => {
    const scQueryId = 0;
    expect(c_deleteScQuery(scQueryId)).toEqual({
      type: actionTypes.C_DELETE_SC_QUERY,
      scQueryId
    });
  });
});

describe("c_updateScQuery action", () => {
  it("should create an action to update a supercollider query", () => {
    const scQueryId = 0;
    const scQueryData = {};
    const expectedAction = {
      type: actionTypes.C_UPDATE_SC_QUERY,
      scQueryId,
      scQueryData
    };
    expect(c_updateScQuery(scQueryId, scQueryData)).toEqual(expectedAction);
  });
});
