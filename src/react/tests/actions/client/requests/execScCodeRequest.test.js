import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_execScCodeError,
  c_execScCodeRequest,
  c_execScCodeSuccess,
  c_execScCodeTimeout
} from "../../../../actions/client/requests/execScCodeRequest";

describe("c_execScCodeRequest action", () => {
  it("should create an action to submit a execScCode request", () => {
    const scCode = "";
    expect(c_execScCodeRequest(scCode)).toEqual({
      type: actionTypes.C_EXEC_SC_CODE_REQUEST,
      scCode
    });
  });
});

describe("c_execScCodeSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const message = "";
    expect(c_execScCodeSuccess(message)).toEqual({
      type: actionTypes.C_EXEC_SC_CODE_SUCCESS,
      message
    });
  });
});

describe("c_execScCodeError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_execScCodeError(error)).toEqual({
      type: actionTypes.C_EXEC_SC_CODE_ERROR,
      error
    });
  });
});

describe("c_execScCodeTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_execScCodeTimeout(message)).toEqual({
      type: actionTypes.C_EXEC_SC_CODE_TIMEOUT,
      message
    });
  });
});
