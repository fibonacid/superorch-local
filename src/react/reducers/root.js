import { combineReducers } from "redux";
import base from "./base";
import chat, * as fromChat from "./chat/index";
import app from "./app";
import websocket from "./websocket";

const root = combineReducers({
  base,
  chat,
  app,
  websocket
});

export default root;

/* ----------------
 *    Selectors
 * ---------------- */

export const selectUsers = state => fromChat.selectUsers(state.chat);

export const selectUser = (state, id) => fromChat.selectUser(state.chat, id);

export const selectUserByLocalId = (state, localId) =>
  fromChat.selectUserByLocalId(state.chat, localId);
