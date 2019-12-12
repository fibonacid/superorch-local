import { actionTypes } from "../../../../actions/actionTypes";
import {
  s_updateDocumentDataSuccess,
  s_updateDocumentDataError
} from "../../../../actions/server/responses/updateDocumentDataResponse";
import { statusCodes } from "../../../../utils/constants";

describe("s_updateDocumentDataSuccess action", () => {
  it("should create an action to communicate that the request completed successfully", () => {
    expect(s_updateDocumentDataSuccess()).toEqual({
      type: actionTypes.S_UPDATE_DOCUMENT_DATA_SUCCESS
    });
  });
});

describe("s_updateDocumentDataError action", () => {
  it("should create an action to communicate that the request raised some errors", () => {
    const status = 400;
    const message = statusCodes[400];
    expect(s_updateDocumentDataError(status, message)).toEqual({
      type: actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR,
      error: { status, message }
    });
  });
});
