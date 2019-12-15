import { actionTypes } from "../../actionTypes";

export const s_updateScQueryDataSuccess = () => ({
  type: actionTypes.S_UPDATE_SC_QUERY_DATA_SUCCESS
});

export const s_updateScQueryDataError = (status, message) => ({
  type: actionTypes.S_UPDATE_SC_QUERY_DATA_ERROR,
  error: {
    status,
    message
  }
});
