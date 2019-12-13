import { actionTypes } from "../../../actions/actionTypes";
import {
  c_appendScQuery,
  c_createScQuery,
  c_deleteScQuery,
  c_updateScQuery
} from "../../../actions/client/crudScQueries";

describe("c_createScQuery action", () => {
  it("should create an action to create a supercollider query", () => {
    const scqId = 0;
    const scqData = {};
    const expectedAction = {
      type: actionTypes.C_CREATE_SC_QUERY,
      scqId,
      scqData
    };
    expect(c_createScQuery(scqId, scqData)).toEqual(expectedAction);
  });
});

describe("c_deleteScQuery action", () => {
  it("should create an action to delete a specific supercollider query", () => {
    const scqId = 0;
    expect(c_deleteScQuery(scqId)).toEqual({
      type: actionTypes.C_DELETE_SC_QUERY,
      scqId
    });
  });
});

describe("c_updateScQuery action", () => {
  it("should create an action to update a supercollider query", () => {
    const scqId = 0;
    const scqData = {};
    const expectedAction = {
      type: actionTypes.C_UPDATE_SC_QUERY,
      scqId,
      scqData
    };
    expect(c_updateScQuery(scqId, scqData)).toEqual(expectedAction);
  });
});

describe("c_appendScQuery action", () => {
  it("should create an action to append a supercollider query", () => {
    const scqData = {};
    const expectedAction = {
      type: actionTypes.C_APPEND_SC_QUERY,
      scqData
    };
    expect(c_appendScQuery(scqData)).toEqual(expectedAction);
  });
});
