import { combineReducers } from "redux";
import base, * as fromBase from "./base";
import client, * as fromClient from "./client";
import server, * as fromServer from "./server";

const root = combineReducers({
  base,
  client,
  server
});

export default root;

// Client selectors
// ----------------

/**
 *
 * @param state
 */
export const selectDocuments = state => fromClient.selectDocuments(state.chat);

/**
 * Selects a document by id.
 *
 * @param state
 * @param id
 */
export const selectDocument = (state, id) =>
  fromClient.selectDocument(state.chat, id);

/**
 * Selects user list.
 *
 * @param state
 */
export const selectUsers = state => fromClient.selectUsers(state.chat);

/**
 * Selects user by id.
 *
 * @param state
 * @param id
 */
export const selectUser = (state, id) => fromClient.selectUser(state.chat, id);

/**
 * Selects a supercollider query by id.
 *
 * @param state
 * @param id
 */
export const selectScQuery = (state, id) =>
  fromClient.selectScQuery(state.chat, id);

// Server selectors
// ----------------

/**
 * Select a client by id.
 *
 * @param state
 * @param id
 */
export const selectClient = (state, id) =>
  fromServer.selectClient(state.chat, id);
