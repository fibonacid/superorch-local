import { actionTypes } from "../../actionTypes";

export const c_getDocumentListRequest = () => ({
  type: actionTypes.C_GET_DOCUMENT_LIST_REQUEST
});

export const c_getDocumentListSuccess = (docList, message) => ({
  type: actionTypes.C_GET_DOCUMENT_LIST_SUCCESS,
  docList,
  message
});

export const c_getDocumentListError = error => ({
  type: actionTypes.C_GET_DOCUMENT_LIST_ERROR,
  error
});

export const c_getDocumentListTimeout = message => ({
  type: actionTypes.C_GET_DOCUMENT_LIST_TIMEOUT,
  message
});
