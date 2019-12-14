import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_getScQueryError,
  c_getScQueryRequest,
  c_getScQuerySuccess,
  c_getScQueryTimeout
} from "../../../../actions/client/requests/getScQueryRequest";

describe("c_getScQueryRequest action", () => {
  it("should create an action to submit a getScQuery request", () => {
    const scqId = 0;
    expect(c_getScQueryRequest(scqId)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_REQUEST,
      scqId
    });
  });
});

describe("c_getScQuerySuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const scqData = {};
    const message = "";
    expect(c_getScQuerySuccess(scqData, message)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_SUCCESS,
      scqData,
      message
    });
  });
});

describe("c_getScQueryError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_getScQueryError(error)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_ERROR,
      error
    });
  });
});

describe("c_getScQueryTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_getScQueryTimeout(message)).toEqual({
      type: actionTypes.C_GET_SC_QUERY_TIMEOUT,
      message
    });
  });
});
