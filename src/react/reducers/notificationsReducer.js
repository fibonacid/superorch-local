import {actionTypes} from "../actions/actionTypes";
import _ from 'lodash'

export const notificationsReducer = (state=[], action) => {
  switch(action.type) {
    case actionTypes.ADD_NOTIFICATION:
      return _.concat(state, [{
        message: action.message,
        kind: action.kind
      }]);
    default:
      return state;
  }
};

