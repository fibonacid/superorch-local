import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_createScQueryError,
  c_createScQueryRequest,
  c_createScQuerySuccess,
  c_createScQueryTimeout
} from "../../../../actions/client/requests/createScQueryRequest";

describe("c_createScQueryRequest action", () => {
  it("should create an action to submit a createScQuery request", () => {
    expect(c_createScQueryRequest()).toEqual({
      type: actionTypes.C_CREATE_SC_QUERY_REQUEST
    });
  });
});

describe("c_createScQuerySuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const scqId = 0;
    const message = "";
    expect(c_createScQuerySuccess(scqId, message)).toEqual({
      type: actionTypes.C_CREATE_SC_QUERY_SUCCESS,
      scqId,
      message
    });
  });
});

describe("c_createScQueryError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_createScQueryError(error)).toEqual({
      type: actionTypes.C_CREATE_SC_QUERY_ERROR,
      error
    });
  });
});

describe("c_createScQueryTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_createScQueryTimeout(message)).toEqual({
      type: actionTypes.C_CREATE_SC_QUERY_TIMEOUT,
      message
    });
  });
});
