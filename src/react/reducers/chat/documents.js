import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

export const initialState = [];

const documents = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DOCUMENT:
      return [...state, { id: action.id, state: "" }];

    case actionTypes.UPDATE_DOCUMENT:
      return state.splice(_.findIndex(state, { id: action.id }), {
        id: action.id,
        state: action.state
      });

    case actionTypes.DELETE_DOCUMENT:
      return _.remove(state, document => document.id === action.id);

    default:
      return state;
  }
};

export default documents;
