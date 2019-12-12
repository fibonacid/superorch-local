import { actionTypes } from "../../actionTypes";

export const s_getDocumentListSuccess = docList => ({
  type: actionTypes.S_GET_DOCUMENT_LIST_SUCCESS,
  docList
});

export const s_getDocumentListError = (status, message) => ({
  type: actionTypes.S_GET_DOCUMENT_LIST_ERROR,
  error: { status, message }
});
