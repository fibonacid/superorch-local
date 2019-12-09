import { actionTypes } from "../../../actions/actionTypes";
import {
  wsCreateUser,
  wsCreateUserError,
  wsCreateUserSuccess,
  wsCreateUserTimeout
} from "../../../actions/client/createUser";

describe("wsCreateUser action", () => {
  it("should create an action to request the creation of a new USER on the server", () => {
    const user = {};
    expect(wsCreateUser(user)).toEqual({
      type: actionTypes.WS_CREATE_USER,
      user
    });
  });
});

describe("wsCreateUserSuccess action", () => {
  it("should create an action to communicate that the request failed", () => {
    const userId = 0;
    expect(wsCreateUserSuccess(userId)).toEqual({
      type: actionTypes.WS_CREATE_USER_SUCCESS,
      userId
    });
  });
});

describe("wsCreateUserError action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const error = new Error();
    expect(wsCreateUserError(error)).toEqual({
      type: actionTypes.WS_CREATE_USER_ERROR,
      error
    });
  });
});

describe("wsCreateUserTimeout action", () => {
  it("should create an action to communicate that the request took to long to complete", () => {
    const message = "";
    expect(wsCreateUserTimeout(message)).toEqual({
      type: actionTypes.WS_CREATE_USER_TIMEOUT,
      message
    });
  });
});
