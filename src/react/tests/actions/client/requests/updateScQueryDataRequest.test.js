import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_updateScQueryDataError,
  c_updateScQueryDataRequest,
  c_updateScQueryDataSuccess,
  c_updateScQueryDataTimeout
} from "../../../../actions/client/requests/updateScQueryDataRequest";

describe("c_updateScQueryDataRequest action", () => {
  it("should create an action to submit a updateScQuery request", () => {
    const scqId = 0;
    const scqData = { foo: "bar" };
    expect(c_updateScQueryDataRequest(scqId, scqData)).toEqual({
      type: actionTypes.C_UPDATE_SC_QUERY_DATA_REQUEST,
      scqId,
      scqData
    });
  });
});

describe("c_updateScQueryDataSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const message = "";
    expect(c_updateScQueryDataSuccess(message)).toEqual({
      type: actionTypes.C_UPDATE_SC_QUERY_DATA_SUCCESS,
      message
    });
  });
});

describe("c_updateScQueryDataError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_updateScQueryDataError(error)).toEqual({
      type: actionTypes.C_UPDATE_SC_QUERY_DATA_ERROR,
      error
    });
  });
});

describe("c_updateScQueryDataTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_updateScQueryDataTimeout(message)).toEqual({
      type: actionTypes.C_UPDATE_SC_QUERY_DATA_TIMEOUT,
      message
    });
  });
});
