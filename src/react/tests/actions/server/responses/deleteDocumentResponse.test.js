import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_deleteDocumentSuccess,
  s_deleteDocumentError
} from "../../../../actions/server/responses/deleteDocumentResponse";

describe("s_deleteDocumentSuccess action", () => {
  it("should delete an action to communicate that the request completed successfully", () => {
    expect(s_deleteDocumentSuccess()).toEqual({
      type: actionTypes.S_DELETE_DOCUMENT_SUCCESS
    });
  });
});

describe("s_deleteDocumentError action", () => {
  it("should delete an action to communicate that the request raised some errors", () => {
    const error = new Error();
    expect(s_deleteDocumentError(error)).toEqual({
      type: actionTypes.S_DELETE_DOCUMENT_ERROR,
      error
    });
  });
});
