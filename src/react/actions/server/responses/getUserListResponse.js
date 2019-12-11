import { actionTypes } from "../../actionTypes";

export const s_getUserListSuccess = userList => ({
  type: actionTypes.S_GET_USER_LIST_SUCCESS,
  userList
});

export const s_getUserListError = error => ({
  type: actionTypes.S_GET_USER_LIST_ERROR,
  error
});
