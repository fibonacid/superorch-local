import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_getUserListSuccess,
  s_getUserListError
} from "../../../../actions/server/responses/getUserListResponse";

describe("s_getUserListSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const userList = {};
    expect(s_getUserListSuccess(userList)).toEqual({
      type: actionTypes.S_GET_USER_LIST_SUCCESS,
      userList
    });
  });
});

describe("s_getUserListError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const error = new Error();
    expect(s_getUserListError(error)).toEqual({
      type: actionTypes.S_GET_USER_LIST_ERROR,
      error
    });
  });
});
