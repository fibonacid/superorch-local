import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_connectionSuccess,
  s_connectionError
} from "../../../../actions/server/responses/connectionResponse";
import { statusCodes } from "../../../../utils/constants";

describe("s_connectionSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    expect(s_connectionSuccess()).toEqual({
      type: actionTypes.S_CONNECTION_SUCCESS
    });
  });
});

describe("s_connectionError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 500;
    const message = statusCodes[500];
    expect(s_connectionError(status, message)).toEqual({
      type: actionTypes.S_CONNECTION_ERROR,
      error: { status, message }
    });
  });
});
