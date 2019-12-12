import { actionTypes } from "../../../../actions/actionTypes";
import {
  c_getDocumentListError,
  c_getDocumentListRequest,
  c_getDocumentListSuccess,
  c_getDocumentListTimeout
} from "../../../../actions/client/requests/getDocumentListRequest";

describe("c_getDocumentListRequest action", () => {
  it("should create an action to submit a getDocumentList request", () => {
    expect(c_getDocumentListRequest()).toEqual({
      type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST
    });
  });
});

describe("c_getDocumentListSuccess action", () => {
  it("should create an action to communicate that the request succeeded", () => {
    const docList = 0;
    const message = "";
    expect(c_getDocumentListSuccess(docList, message)).toEqual({
      type: actionTypes.C_GET_DOCUMENT_LIST_SUCCESS,
      docList,
      message
    });
  });
});

describe("c_getDocumentListError action", () => {
  it("should create an action to communicate that the request failed", () => {
    const error = new Error();
    expect(c_getDocumentListError(error)).toEqual({
      type: actionTypes.C_GET_DOCUMENT_LIST_ERROR,
      error
    });
  });
});

describe("c_getDocumentListTimeout action", () => {
  it("should create an action to communicate that the request took too long to complete", () => {
    const message = "";
    expect(c_getDocumentListTimeout(message)).toEqual({
      type: actionTypes.C_GET_DOCUMENT_LIST_TIMEOUT,
      message
    });
  });
});
