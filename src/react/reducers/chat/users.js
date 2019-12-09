import { actionTypes } from "../../actions/actionTypes";
import _ from "lodash";

export default function users(state = [], action) {
  switch (action.type) {
    case actionTypes.C_CREATE_USER:
      return [
        ...state,
        {
          id: action.userId,
          ...action.userData
        }
      ];

    case actionTypes.C_UPDATE_USER:
      // Modify data of user with same id.
      return state.map(user =>
        user.id === action.userId
          ? {
              ...user,
              ...action.userData
            }
          : user
      );

    case actionTypes.C_DELETE_USER:
      // Delete user with the given id.
      return state.filter(user => user.id !== action.userId);

    case actionTypes.C_REPLACE_USER_LIST:
      return action.userList;

    default:
      return state;
  }
}

export const selectUser = (users, id) => users.find(user => user.id === id);
