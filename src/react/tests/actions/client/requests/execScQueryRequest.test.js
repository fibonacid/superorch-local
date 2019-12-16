import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_execScQueryError,
  c_execScQueryRequest,
  c_execScQuerySuccess,
  c_execScQueryTimeout
} from "../../../../actions/client/requests/execScQueryRequest";

describe("c_execScQueryRequest action", () => {
  it("should create an action to submit a execScQuery request", () => {
    const scqId = 0;
    expect(c_execScQueryRequest(scqId)).toEqual({
      type: actionTypes.C_EXEC_SC_QUERY_REQUEST,
      scqId
    });
  });
});

describe("c_execScQuerySuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const message = "";
    expect(c_execScQuerySuccess(message)).toEqual({
      type: actionTypes.C_EXEC_SC_QUERY_SUCCESS,
      message
    });
  });
});

describe("c_execScQueryError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_execScQueryError(error)).toEqual({
      type: actionTypes.C_EXEC_SC_QUERY_ERROR,
      error
    });
  });
});

describe("c_execScQueryTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_execScQueryTimeout(message)).toEqual({
      type: actionTypes.C_EXEC_SC_QUERY_TIMEOUT,
      message
    });
  });
});
