import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_createScQuerySuccess,
  s_createScQueryError
} from "../../../../actions/server/responses/createScQueryResponse";
import { statusCodes } from "../../../../utils/constants";

describe("s_createScQuerySuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const scqId = 0;
    const scqData = {};
    expect(s_createScQuerySuccess(scqId, scqData)).toEqual({
      type: actionTypes.S_CREATE_SC_QUERY_SUCCESS,
      scqId,
      scqData
    });
  });
});

describe("s_createScQueryError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 500;
    const message = statusCodes[500];
    expect(s_createScQueryError(status, message)).toEqual({
      type: actionTypes.S_CREATE_SC_QUERY_ERROR,
      error: { status, message }
    });
  });
});
