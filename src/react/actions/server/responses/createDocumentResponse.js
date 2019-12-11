import { actionTypes } from "../../actionTypes";

export const s_createDocumentSuccess = userId => ({
  type: actionTypes.S_CREATE_DOCUMENT_SUCCESS,
  userId
});

export const s_createDocumentError = error => ({
  type: actionTypes.S_CREATE_DOCUMENT_ERROR,
  error
});
