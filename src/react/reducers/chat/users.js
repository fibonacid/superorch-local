import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

export default function users(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return [...state, action.user];

    case actionTypes.UPDATE_USER:
      // Modify data of user with same id.
      return state.map(user =>
        user.id === action.id ? _.merge({}, user, action.data) : user
      );

    case actionTypes.DELETE_USER:
      // Delete user with the given id.
      return state.filter(user => user.id !== action.id);

    case actionTypes.REPLACE_USER_LIST:
      return action.userList;

    default:
      return state;
  }
}

export const selectUser = (users, id) => users.find(user => user.id === id);
