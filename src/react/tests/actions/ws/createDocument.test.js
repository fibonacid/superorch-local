import { actionTypes } from "../../../actions/actionTypes";
import {
  wsCreateDocument,
  wsCreateDocumentError,
  wsCreateDocumentSuccess,
  wsCreateDocumentTimeout
} from "../../../actions/client/createDocument";

describe("wsCreateDocument action", () => {
  it("should create an action to request the creation of a new document on the server", () => {
    const document = {};
    expect(wsCreateDocument(document)).toEqual({
      type: actionTypes.WS_CREATE_DOCUMENT,
      document
    });
  });
});

describe("wsCreateDocumentSuccess action", () => {
  it("should create an action to communicate that the request failed", () => {
    const documentId = 0;
    expect(wsCreateDocumentSuccess(documentId)).toEqual({
      type: actionTypes.WS_CREATE_DOCUMENT_SUCCESS,
      documentId
    });
  });
});

describe("wsCreateDocumentError action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const error = new Error();
    expect(wsCreateDocumentError(error)).toEqual({
      type: actionTypes.WS_CREATE_DOCUMENT_ERROR,
      error
    });
  });
});

describe("wsCreateDocumentTimeout action", () => {
  it("should create an action to communicate that the request took to long to complete", () => {
    const message = "";
    expect(wsCreateDocumentTimeout(message)).toEqual({
      type: actionTypes.WS_CREATE_DOCUMENT_TIMEOUT,
      message
    });
  });
});
