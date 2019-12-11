import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_createDocumentError,
  c_createDocumentRequest,
  c_createDocumentSuccess,
  c_createDocumentTimeout
} from "../../../../actions/client/requests/createDocumentRequest";

describe("c_createDocumentRequest action", () => {
  it("should create an action to submit a createDocument request", () => {
    expect(c_createDocumentRequest()).toEqual({
      type: actionTypes.C_CREATE_DOCUMENT_REQUEST
    });
  });
});

describe("c_createDocumentSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const docId = 0;
    const message = "";
    expect(c_createDocumentSuccess(docId, message)).toEqual({
      type: actionTypes.C_CREATE_DOCUMENT_SUCCESS,
      docId,
      message
    });
  });
});

describe("c_createDocumentError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_createDocumentError(error)).toEqual({
      type: actionTypes.C_CREATE_DOCUMENT_ERROR,
      error
    });
  });
});

describe("c_createDocumentTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_createDocumentTimeout(message)).toEqual({
      type: actionTypes.C_CREATE_DOCUMENT_TIMEOUT,
      message
    });
  });
});
