import { actionTypes } from "../../actionTypes";

export const c_execScCodeRequest = scCode => ({
  type: actionTypes.C_EXEC_SC_CODE_REQUEST,
  scCode
});

export const c_execScCodeSuccess = message => ({
  type: actionTypes.C_EXEC_SC_CODE_SUCCESS,
  message
});

export const c_execScCodeError = error => ({
  type: actionTypes.C_EXEC_SC_CODE_ERROR,
  error
});

export const c_execScCodeTimeout = message => ({
  type: actionTypes.C_EXEC_SC_CODE_TIMEOUT,
  message
});
