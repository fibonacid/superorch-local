import { actionTypes } from "../../../actions/actionTypes";
import {
  wsGetUserList,
  wsGetUserListError,
  wsGetUserListSuccess,
  wsGetUserListTimeout
} from "../../../actions/ws/getUserList";

describe("wsGetUserList action", () => {
  it("should create an action to request a user list from the server", () => {
    expect(wsGetUserList()).toEqual({
      type: actionTypes.WS_GET_USER_LIST
    });
  });
});

describe("wsGetUserListSuccess action", () => {
  it("should create an action to communicate that the request failed", () => {
    const userList = [];
    expect(wsGetUserListSuccess(userList)).toEqual({
      type: actionTypes.WS_GET_USER_LIST_SUCCESS,
      userList
    });
  });
});

describe("wsGetUserListError action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const error = new Error();
    expect(wsGetUserListError(error)).toEqual({
      type: actionTypes.WS_GET_USER_LIST_ERROR,
      error
    });
  });
});

describe("wsGetUserListTimeout action", () => {
  it("should create an action to communicate that the request took to long to complete", () => {
    const message = "";
    expect(wsGetUserListTimeout(message)).toEqual({
      type: actionTypes.WS_GET_USER_LIST_TIMEOUT,
      message
    });
  });
});
