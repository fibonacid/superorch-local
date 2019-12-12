import { actionTypes } from "../actionTypes";

export const s_message = (clientId, message) => ({
  type: actionTypes.S_MESSAGE,
  clientId,
  message
});

export const s_messageError = (status, message) => ({
  type: actionTypes.S_MESSAGE_ERROR,
  error: {
    status,
    message
  }
});
