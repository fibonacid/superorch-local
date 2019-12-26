import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_connectionError,
  c_connectionRequest,
  c_connectionSuccess,
  c_connectionTimeout
} from "../../../../actions/requests/connectionRequest";

describe("c_connectionRequest action", () => {
  it("should create an action to submit a connection request", () => {
    const url = "ws://localhost:8989";
    const password = "1234";
    expect(c_connectionRequest(url, password)).toEqual({
      type: actionTypes.C_CONNECTION_REQUEST,
      url,
      password
    });
  });
});

describe("c_connectionSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    expect(c_connectionSuccess()).toEqual({
      type: actionTypes.C_CONNECTION_SUCCESS
    });
  });
});

describe("c_connectionError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_connectionError(error)).toEqual({
      type: actionTypes.C_CONNECTION_ERROR,
      error
    });
  });
});

describe("c_connectionTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_connectionTimeout(message)).toEqual({
      type: actionTypes.C_CONNECTION_TIMEOUT,
      message
    });
  });
});
