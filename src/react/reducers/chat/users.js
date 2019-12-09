import { actionTypes } from "../../actions/actionTypes";

export default function users(state = [], action) {
  switch (action.type) {
    case actionTypes.S_CREATE_USER:
    case actionTypes.C_CREATE_USER:
    case actionTypes.B_USER_JOINED:
      return [
        ...state,
        {
          id: action.userId,
          ...action.userData
        }
      ];

    case actionTypes.C_UPDATE_USER:
    case actionTypes.S_UPDATE_USER:
    case actionTypes.B_USER_UPDATE:
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
    case actionTypes.S_DELETE_USER:
    case actionTypes.B_USER_LEFT:
      // Delete user with the given id.
      return state.filter(user => user.id !== action.userId);

    case actionTypes.C_REPLACE_USER_LIST:
      return action.userList;

    default:
      return state;
  }
}

export const selectUser = (users, id) => users.find(user => user.id === id);
