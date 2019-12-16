import { statusCodes } from "../../../../utils/constants";
import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_updateScQueryDataSuccess,
  s_updateScQueryDataError
} from "../../../../actions/server/responses/updateScQueryDataResponse";

describe("s_updateScQueryDataSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    expect(s_updateScQueryDataSuccess()).toEqual({
      type: actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS
    });
  });
});

describe("s_updateScQueryDataError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 400;
    const message = statusCodes[400];
    expect(s_updateScQueryDataError(status, message)).toEqual({
      type: actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR,
      error: { status, message }
    });
  });
});
