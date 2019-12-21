import { actionTypes } from "../../actionTypes";

export const c_createDocumentRequest = docData => ({
  type: actionTypes.C_CREATE_DOCUMENT_REQUEST,
  docData
});

export const c_createDocumentSuccess = (docId, docData) => ({
  type: actionTypes.C_CREATE_DOCUMENT_SUCCESS,
  docId,
  docData
});

export const c_createDocumentError = error => ({
  type: actionTypes.C_CREATE_DOCUMENT_ERROR,
  error
});

export const c_createDocumentTimeout = message => ({
  type: actionTypes.C_CREATE_DOCUMENT_TIMEOUT,
  message
});
