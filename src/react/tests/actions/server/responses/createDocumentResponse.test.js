import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_createDocumentSuccess,
  s_createDocumentError
} from "../../../../actions/server/responses/createDocumentResponse";

describe("s_createDocumentSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const userId = 0;
    expect(s_createDocumentSuccess(userId)).toEqual({
      type: actionTypes.S_CREATE_DOCUMENT_SUCCESS,
      userId
    });
  });
});

describe("s_createDocumentError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const error = new Error();
    expect(s_createDocumentError(error)).toEqual({
      type: actionTypes.S_CREATE_DOCUMENT_ERROR,
      error
    });
  });
});
