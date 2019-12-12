import { combineReducers } from "redux";
import base from "./base";
import chat, * as fromChat from "./chat/index";
import client from "./client";
import server from "./server";

const root = combineReducers({
  base,
  chat,
  client,
  server
});

export default root;

/* ----------------
 *    Selectors
 * ---------------- */

export const selectDocuments = state => fromChat.selectDocuments(state.chat);

export const selectDocument = (state, id) =>
  fromChat.selectDocument(state.chat, id);

export const selectClient = (state, id) =>
  fromChat.selectClient(state.chat, id);

export const selectUsers = state => fromChat.selectUsers(state.chat);

export const selectUser = (state, id) => fromChat.selectUser(state.chat, id);

export const selectScQuery = (state, id) =>
  fromChat.selectScQuery(state.chat, id);
