import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

export default function clients(state = [], action) {
  switch (action.type) {
    case actionTypes.S_CREATE_CLIENT:
    case actionTypes.S_CLIENT_CONNECTED:
      return [
        ...state,
        {
          id: action.clientId,
          ...action.clientData
        }
      ];

    case actionTypes.S_UPDATE_CLIENT:
      // Modify data of client with same id.
      return state.map(client =>
        client.id === action.clientId
          ? {
              ...client,
              ...action.clientData
            }
          : client
      );

    case actionTypes.S_DELETE_CLIENT:
      // Delete client with the given id.
      return state.filter(client => client.id !== action.clientId);

    default:
      return state;
  }
}

export const selectClient = (state, id) =>
  _.find(state, client => client.id === id);
