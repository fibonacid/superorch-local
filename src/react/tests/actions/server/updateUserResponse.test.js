import { actionTypes } from "../../../actions/actionTypes";
import {
  s_updateUserSuccess,
  s_updateUserError
} from "../../../actions/server/updateUserResponse";

describe("s_updateUserSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    expect(s_updateUserSuccess()).toEqual({
      type: actionTypes.S_UPDATE_USER_SUCCESS
    });
  });
});

describe("s_updateUserError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const error = new Error();
    expect(s_updateUserError(error)).toEqual({
      type: actionTypes.S_UPDATE_USER_ERROR,
      error
    });
  });
});
