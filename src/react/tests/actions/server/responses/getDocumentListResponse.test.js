import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_getDocumentListSuccess,
  s_getDocumentListError
} from "../../../../actions/server/responses/getDocumentListResponse";
import { statusCodes } from "../../../../utils/constants";

describe("s_getDocumentListSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    const docList = {};
    expect(s_getDocumentListSuccess(docList)).toEqual({
      type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS,
      docList
    });
  });
});

describe("s_getDocumentListError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 400;
    const message = statusCodes[400];
    expect(s_getDocumentListError(status, message)).toEqual({
      type: actionTypes.S_GET_DOCUMENT_LIST_ERROR,
      error: { status, message }
    });
  });
});
