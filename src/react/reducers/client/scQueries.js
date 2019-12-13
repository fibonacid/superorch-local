import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

export default function scQueries(state = [], action) {
  switch (action.type) {
    case actionTypes.C_CREATE_SC_QUERY:
      return [
        ...state,
        {
          id: action.scqId,
          ...action.scqData
        }
      ];

    case actionTypes.C_UPDATE_SC_QUERY:
      // Modify data of user with same id.
      return state.map(scQuery =>
        scQuery.id === action.scqId
          ? {
              ...scQuery,
              ...action.scqData
            }
          : scQuery
      );

    case actionTypes.C_DELETE_SC_QUERY:
      // Delete scQuery with the given id.
      return state.filter(scQuery => scQuery.id !== action.scqId);

    default:
      return state;
  }
}

export const selectScQuery = (state, id) =>
  _.find(state, scQuery => scQuery.id === id);
