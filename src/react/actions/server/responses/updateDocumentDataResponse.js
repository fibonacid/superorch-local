import { actionTypes } from "../../actionTypes";

export const s_updateDocumentDataSuccess = () => ({
  type: actionTypes.S_UPDATE_DOCUMENT_DATA_SUCCESS
});

export const s_updateDocumentDataError = error => ({
  type: actionTypes.S_UPDATE_DOCUMENT_DATA_ERROR,
  error
});
