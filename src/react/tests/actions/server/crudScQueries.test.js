import { actionTypes } from "../../../actions/actionTypes";
import {
  s_createScQuery,
  s_deleteScQuery,
  s_updateScQuery
} from "../../../actions/server/crudScQueries";

describe("s_createScQuery action", () => {
  it("should create an action to create a supercollider query", () => {
    const scQueryId = 0;
    const scQueryData = {};
    const expectedAction = {
      type: actionTypes.S_CREATE_SC_QUERY,
      scQueryId,
      scQueryData
    };
    expect(s_createScQuery(scQueryId, scQueryData)).toEqual(expectedAction);
  });
});

describe("s_deleteScQuery action", () => {
  it("should create an action to delete a specific supercollider query", () => {
    const scQueryId = 0;
    expect(s_deleteScQuery(scQueryId)).toEqual({
      type: actionTypes.S_DELETE_SC_QUERY,
      scQueryId
    });
  });
});

describe("s_updateScQuery action", () => {
  it("should create an action to update a supercollider query", () => {
    const scQueryId = 0;
    const scQueryData = {};
    const expectedAction = {
      type: actionTypes.S_UPDATE_SC_QUERY,
      scQueryId,
      scQueryData
    };
    expect(s_updateScQuery(scQueryId, scQueryData)).toEqual(expectedAction);
  });
});
