import { statusCodes } from "../../../../utils/constants";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_updateUserDataSuccess,
  s_updateUserDataError
} from "../../../../actions/server/responses/updateUserDataResponse";

describe("s_updateUserDataSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    expect(s_updateUserDataSuccess()).toEqual({
      type: actionTypes.S_UPDATE_USER_DATA_SUCCESS
    });
  });
});

describe("s_updateUserDataError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 400;
    const message = statusCodes[400];
    expect(s_updateUserDataError(status, message)).toEqual({
      type: actionTypes.S_UPDATE_USER_DATA_ERROR,
      error: { status, message }
    });
  });
});
