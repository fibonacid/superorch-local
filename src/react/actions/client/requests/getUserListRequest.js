import { actionTypes } from "../../actionTypes";

export const c_getUserListRequest = () => ({
  type: actionTypes.C_GET_USER_LIST_REQUEST
});

export const c_getUserListSuccess = (userList, message) => ({
  type: actionTypes.C_GET_USER_LIST_SUCCESS,
  userList,
  message
});

export const c_getUserListError = error => ({
  type: actionTypes.C_GET_USER_LIST_ERROR,
  error
});

export const c_getUserListTimeout = message => ({
  type: actionTypes.C_GET_USER_LIST_TIMEOUT,
  message
});
