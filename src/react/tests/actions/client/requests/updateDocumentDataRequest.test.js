import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_updateDocumentDataError,
  c_updateDocumentDataRequest,
  c_updateDocumentDataSuccess,
  c_updateDocumentDataTimeout
} from "../../../../actions/client/requests/updateDocumentDataRequest";

describe("c_updateDocumentDataRequest action", () => {
  it("should create an action to submit a updateDocument request", () => {
    const docId = 0;
    const docData = { foo: "bar" };
    expect(c_updateDocumentDataRequest(docId, docData)).toEqual({
      type: actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
      docId,
      docData
    });
  });
});

describe("c_updateDocumentDataSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    expect(c_updateDocumentDataSuccess()).toEqual({
      type: actionTypes.C_UPDATE_DOCUMENT_DATA_SUCCESS
    });
  });
});

describe("c_updateDocumentDataError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_updateDocumentDataError(error)).toEqual({
      type: actionTypes.C_UPDATE_DOCUMENT_DATA_ERROR,
      error
    });
  });
});

describe("c_updateDocumentDataTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_updateDocumentDataTimeout(message)).toEqual({
      type: actionTypes.C_UPDATE_DOCUMENT_DATA_TIMEOUT,
      message
    });
  });
});
