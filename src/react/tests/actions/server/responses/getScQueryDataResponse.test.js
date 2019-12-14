import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_getScQueryDataSuccess,
  s_getScQueryDataError
} from "../../../../actions/server/responses/getScQueryDataResponse";
import { statusCodes } from "../../../../utils/constants";

describe("s_getScQueryDataSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const scqData = {};
    expect(s_getScQueryDataSuccess(scqData)).toEqual({
      type: actionTypes.S_GET_SC_QUERY_DATA_SUCCESS,
      scqData
    });
  });
});

describe("s_getScQueryDataError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 400;
    const message = statusCodes[400];
    expect(s_getScQueryDataError(status, message)).toEqual({
      type: actionTypes.S_GET_SC_QUERY_DATA_ERROR,
      error: { status, message }
    });
  });
});
