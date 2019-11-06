import {actionTypes} from "./actionTypes";

export const appInfo = (data) => ({
  type: actionTypes.APP_INFO,
  data
});

export const addMessage = (message) => ({
  type: actionTypes.ADD_MESSAGE,
  message
});

export const addUser = name => ({
  type: actionTypes.ADD_USER,
  name
});

export const addNotification = (message, kind) => ({
  type: actionTypes.ADD_NOTIFICATION,
  message,
  kind
});

export const messageReceived = (data) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  data
});

export const populateUserList = (users) => ({
  type: actionTypes.USER_LIST,
  users
});
