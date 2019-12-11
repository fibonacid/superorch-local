import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_updateDocumentDataError,
  c_updateDocumentDataRequest,
  c_updateDocumentDataSuccess,
  c_updateDocumentDataTimeout
} from "../../../../actions/client/requests/updateDocumentDataRequest";

describe("c_updateDocumentDataRequest action", () => {
  it("should create an action to submit a updateDocument request", () => {
    const userData = { foo: "bar" };
    expect(c_updateDocumentDataRequest(userData)).toEqual({
      type: actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
      userData
    });
  });
});

describe("c_updateDocumentDataSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const message = "";
    expect(c_updateDocumentDataSuccess(message)).toEqual({
      type: actionTypes.C_UPDATE_DOCUMENT_DATA_SUCCESS,
      message
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
