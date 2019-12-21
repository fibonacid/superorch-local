import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_createDocumentSuccess,
  s_createDocumentError
} from "../../../../actions/server/responses/createDocumentResponse";
import { statusCodes } from "../../../../utils/constants";

describe("s_createDocumentSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const docId = 0;
    expect(s_createDocumentSuccess(docId)).toEqual({
      type: actionTypes.S_CREATE_DOCUMENT_SUCCESS,
      docId
    });
  });
});

describe("s_createDocumentError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 500;
    const message = statusCodes[500];
    expect(s_createDocumentError(status, message)).toEqual({
      type: actionTypes.S_CREATE_DOCUMENT_ERROR,
      error: { status, message }
    });
  });
});
