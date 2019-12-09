import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

export default function clients(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_CLIENT:
      return [...state, action.client];

    case actionTypes.UPDATE_CLIENT:
      // Modify data of client with same id.
      return state.map(client =>
        client.id === action.id ? _.merge({}, client, action.data) : client
      );

    case actionTypes.DELETE_CLIENT:
      // Delete client with the given id.
      return state.filter(client => client.id !== action.id);

    default:
      return state;
  }
}

export const selectClient = (state, id) =>
  _.find(state, client => client.id === id);
