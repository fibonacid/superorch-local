import { actionTypes } from "../actionTypes";

export const updateMyDocId = docId => ({
  type: actionTypes.UPDATE_MY_DOC_ID,
  docId
});
