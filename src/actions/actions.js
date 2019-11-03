import {actionTypes} from "./actionTypes";

export const addMessage = (data) => ({
  type: actionTypes.ADD_MESSAGE,
  data
});

export const messageReceived = (data) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  data
});

export const populateUserList = (users) => ({
  type: actionTypes.USERS_LIST
});
