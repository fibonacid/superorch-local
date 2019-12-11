import { actionTypes } from "../actionTypes";

export const c_addMyDocId = docId => ({
  type: actionTypes.C_ADD_MY_DOC_ID,
  docId
});

export const c_removeMyDocId = docId => ({
  type: actionTypes.C_REMOVE_MY_DOC_ID,
  docId
});
