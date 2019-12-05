import { actionTypes } from "../actionTypes";

export const wsGetUserList = () => ({
  type: actionTypes.WS_GET_USER_LIST
});

export const wsGetUserListSuccess = userList => ({
  type: actionTypes.WS_GET_USER_LIST_SUCCESS,
  userList
});

export const wsGetUserListError = error => ({
  type: actionTypes.WS_GET_USER_LIST_ERROR,
  error
});
