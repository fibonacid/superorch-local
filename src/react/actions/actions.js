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

export const flashInfo = (message) => ({
  type: actionTypes.FLASH_INFO,
  message
});

export const flashWarning = (message) => ({
  type: actionTypes.FLASH_WARNING,
  message
});

export const flashError = (message) => ({
  type: actionTypes.FLASH_ERROR,
  message
});

export const messageReceived = (data) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  data
});

export const populateUserList = (users) => ({
  type: actionTypes.USER_LIST,
  users
});

export const textInput = (data) => ({
  type: actionTypes.TEXT_INPUT,
  data
});

export const pushDocument = (data) => ({
  type: actionTypes.PUSH_DOCUMENT,
  data
});
