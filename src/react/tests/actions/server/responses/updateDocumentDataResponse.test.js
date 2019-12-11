import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_updateDocumentDataSuccess,
  s_updateDocumentDataError
} from "../../../../actions/server/responses/updateDocumentDataResponse";

describe("s_updateDocumentDataSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    expect(s_updateDocumentDataSuccess()).toEqual({
      type: actionTypes.S_UPDATE_DOCUMENT_DATA_SUCCESS
    });
  });
});

describe("s_updateDocumentDataError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const error = new Error();
    expect(s_updateDocumentDataError(error)).toEqual({
      type: actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR,
      error
    });
  });
});
