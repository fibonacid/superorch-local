import { actionTypes } from "../../actionTypes";

export const s_deleteDocumentSuccess = () => ({
  type: actionTypes.S_DELETE_DOCUMENT_SUCCESS
});

export const s_deleteDocumentError = (status, message) => ({
  type: actionTypes.S_DELETE_DOCUMENT_ERROR,
  error: { status, message }
});
