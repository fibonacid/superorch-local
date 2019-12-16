import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_getScQueryDataError,
  c_getScQueryDataRequest,
  c_getScQueryDataSuccess,
  c_getScQueryDataTimeout
} from "../../../../actions/client/requests/getScQueryDataRequest";

describe("c_getScQueryDataRequest action", () => {
  it("should create an action to submit a getScQueryData request", () => {
    const scqId = 0;
    expect(c_getScQueryDataRequest(scqId)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_DATA_REQUEST,
      scqId
    });
  });
});

describe("c_getScQueryDataSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const scqData = {};
    const message = "";
    expect(c_getScQueryDataSuccess(scqData, message)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_DATA_SUCCESS,
      scqData,
      message
    });
  });
});

describe("c_getScQueryDataError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_getScQueryDataError(error)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_DATA_ERROR,
      error
    });
  });
});

describe("c_getScQueryDataTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_getScQueryDataTimeout(message)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_DATA_TIMEOUT,
      message
    });
  });
});
