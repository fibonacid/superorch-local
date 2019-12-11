import { actionTypes } from "../../actionTypes";

export const c_deleteDocumentRequest = docId => ({
  type: actionTypes.C_DELETE_DOCUMENT_REQUEST,
  docId
});

export const c_deleteDocumentSuccess = message => ({
  type: actionTypes.C_DELETE_DOCUMENT_SUCCESS,
  message
});

export const c_deleteDocumentError = error => ({
  type: actionTypes.C_DELETE_DOCUMENT_ERROR,
  error
});

export const c_deleteDocumentTimeout = message => ({
  type: actionTypes.C_DELETE_DOCUMENT_TIMEOUT,
  message
});
