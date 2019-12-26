import { actionTypes } from "../../actions/actionTypes";

const initialState = [{ id: 0, name: "foo" }];

export default function index(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return [
        ...state,
        {
          id: action.userId,
          ...action.userData
        }
      ];

    case actionTypes.UPDATE_USER:
      // Modify data of user with same id.
      return state.map(user =>
        user.id === action.userId
          ? {
              ...user,
              ...action.userData
            }
          : user
      );

    case actionTypes.DELETE_USER:
    case actionTypes.DESTROY_USER:
      // Delete user with the given id.
      return state.filter(user => user.id !== action.userId);

    case actionTypes.REPLACE_USER_LIST:
      return action.userList;

    default:
      return state;
  }
}

export const selectUser = (users, id) => users.find(user => user.id === id);
