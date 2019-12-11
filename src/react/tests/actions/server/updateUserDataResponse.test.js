import { actionTypes } from "../../../actions/actionTypes";
import {
  s_updateUserDataSuccess,
  s_updateUserDataError
} from "../../../actions/server/updateUserDataResponse";

describe("s_updateUserDataSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    expect(s_updateUserDataSuccess()).toEqual({
      type: actionTypes.S_UPDATE_USER_DATA_SUCCESS
    });
  });
});

describe("s_updateUserDataError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const error = new Error();
    expect(s_updateUserDataError(error)).toEqual({
      type: actionTypes.S_UPDATE_USER_DATA_ERROR,
      error
    });
  });
});
