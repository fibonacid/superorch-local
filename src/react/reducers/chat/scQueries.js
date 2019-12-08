import { actionTypes } from "../../actions/actionTypes";

const scQueries = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_SC_QUERY:
      return [
        ...state,
        {
          id: action.id,
          ...action.data
        }
      ];

    case actionTypes.UPDATE_SC_QUERY:
      // Modify data of scQuery with same id.
      return state.map(scQuery =>
        scQuery.id === action.id
          ? {
              ...scQuery,
              ...action.data
            }
          : scQuery
      );

    case actionTypes.DELETE_SC_QUERY:
      return state.filter(scQuery => scQuery.id !== action.id);

    default:
      return state;
  }
};

export default scQueries;

export const selectScQuery = (scQueries, id) =>
  scQueries.find(scQuery => scQuery.id === id);
