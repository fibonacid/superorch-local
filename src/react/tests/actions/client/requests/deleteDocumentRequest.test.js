import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_deleteDocumentError,
  c_deleteDocumentRequest,
  c_deleteDocumentSuccess,
  c_deleteDocumentTimeout
} from "../../../../actions/client/requests/deleteDocumentRequest";

describe("c_deleteDocumentRequest action", () => {
  it("should delete an action to submit a deleteDocument request", () => {
    expect(c_deleteDocumentRequest()).toEqual({
      type: actionTypes.C_DELETE_DOCUMENT_REQUEST
    });
  });
});

describe("c_deleteDocumentSuccess action", () => {
  it("should delete an action to communicate that the request succeeded", () => {
    const message = "";
    expect(c_deleteDocumentSuccess(message)).toEqual({
      type: actionTypes.C_DELETE_DOCUMENT_SUCCESS,
      message
    });
  });
});

describe("c_deleteDocumentError action", () => {
  it("should delete an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_deleteDocumentError(error)).toEqual({
      type: actionTypes.C_DELETE_DOCUMENT_ERROR,
      error
    });
  });
});

describe("c_deleteDocumentTimeout action", () => {
  it("should delete an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_deleteDocumentTimeout(message)).toEqual({
      type: actionTypes.C_DELETE_DOCUMENT_TIMEOUT,
      message
    });
  });
});
