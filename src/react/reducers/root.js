import { combineReducers } from "redux";
import base from "./base";
import chat, * as fromChat from "./chat/index";
import app from "./app";
import flash from "./flash";
import websocket, * as fromWebsocket from "./websocket";

const root = combineReducers({
  base,
  chat,
  app,
  flash,
  websocket
});

export default root;

/* ----------------
 *    Selectors
 * ---------------- */

export const selectUsername = state =>
  fromWebsocket.selectUsername(state.websocket);

export const selectUsers = state => fromChat.selectUsers(state.chat);

export const selectUser = (state, id) => fromChat.selectUser(state.chat, id);

export const selectUserByLocalId = (state, localId) =>
  fromChat.selectUserByLocalId(state.chat, localId);
