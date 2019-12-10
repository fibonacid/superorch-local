import { actionTypes } from "../../../actions/actionTypes";
import {
  c_getUserListError,
  c_getUserListRequest,
  c_getUserListSuccess,
  c_getUserListTimeout
} from "../../../actions/client/getUserListRequest";

describe("c_getUserListRequest action", () => {
  it("should create an action to submit a getUserList request", () => {
    expect(c_getUserListRequest()).toEqual({
      type: actionTypes.C_GET_USER_LIST_REQUEST
    });
  });
});

describe("c_getUserListSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const userList = 0;
    const message = "";
    expect(c_getUserListSuccess(userList, message)).toEqual({
      type: actionTypes.C_GET_USER_LIST_SUCCESS,
      userList,
      message
    });
  });
});

describe("c_getUserListError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_getUserListError(error)).toEqual({
      type: actionTypes.C_GET_USER_LIST_ERROR,
      error
    });
  });
});

describe("c_getUserListTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_getUserListTimeout(message)).toEqual({
      type: actionTypes.C_GET_USER_LIST_TIMEOUT,
      message
    });
  });
});
