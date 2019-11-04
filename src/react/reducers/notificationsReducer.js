import {actionTypes} from "../actions/actionTypes";

export const notificationsReducer = (state=[], action) => {
  switch(action.type) {
    case actionTypes.ADD_NOTIFICATION:
      return state.concat(state, [{
        message: action.message,
        kind: action.kind
      }]);
    default:
      return state;
  }
};
