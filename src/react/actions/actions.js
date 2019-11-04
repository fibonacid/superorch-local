import {actionTypes} from "./actionTypes";

export const addMessage = (message) => ({
  type: actionTypes.ADD_MESSAGE,
  message
});

export const addUser = name => ({
  type: actionTypes.ADD_USER,
  name
});

export const messageReceived = (data) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  data
});

export const populateUserList = (users) => ({
  type: actionTypes.USER_LIST,
  users
});
