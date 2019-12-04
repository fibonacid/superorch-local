import { combineReducers } from "redux";
import users from "./users";
import documents from "./documents";

const chat = combineReducers({
  users,
  documents: documents
});

export default chat;
