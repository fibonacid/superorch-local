import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {documentReducer} from "./documentReducer";

export const chatReducer = combineReducers({
  users: usersReducer,
  document: documentReducer
});
