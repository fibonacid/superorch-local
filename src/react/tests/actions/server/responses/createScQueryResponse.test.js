import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_createScQuerySuccess,
  s_createScQueryError
} from "../../../../actions/server/responses/createScQueryResponse";

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
    const error = new Error();
    expect(s_createScQueryError(error)).toEqual({
      type: actionTypes.S_CREATE_SC_QUERY_ERROR,
      error
    });
  });
});
