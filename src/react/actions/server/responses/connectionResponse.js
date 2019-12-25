import { actionTypes } from "../../actionTypes";

export const s_connectionSuccess = () => ({
  type: actionTypes.S_CONNECTION_SUCCESS
});

export const s_connectionError = (status, message) => ({
  type: actionTypes.S_CONNECTION_ERROR,
  error: { status, message }
});
