import {combineReducers} from "redux";
import users from "./users";
import document from "./document";

const chat = combineReducers({
  users,
  document
});

export default chat;
