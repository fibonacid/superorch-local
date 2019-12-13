import { combineReducers } from "redux";
import base, * as fromBase from "./base";
import client, * as fromClient from "./client";
import server, * as fromServer from "./server";
import flash from "./flash";

const root = combineReducers({
  base,
  flash,
  client,
  server
});

export default root;

// Client selectors
// ----------------

/**
 * Selects all documents
 *
 * @param state
 */
export const selectDocuments = state =>
  fromClient.selectDocuments(state.client);

/**
 * Selects a document by id.
 *
 * @param state
 * @param id
 */
export const selectDocument = (state, id) =>
  fromClient.selectDocument(state.client, id);

/**
 * Selects all users.
 *
 * @param state
 */
export const selectUsers = state => fromClient.selectUsers(state.client);

/**
 * Selects user by id.
 *
 * @param state
 * @param id
 */
export const selectUser = (state, id) =>
  fromClient.selectUser(state.client, id);

/**
 * Selects all supercollider queies.
 *
 * @param state
 */
export const selectScQueries = state =>
  fromClient.selectScQueries(state.client);

/**
 * Selects a supercollider query by id.
 *
 * @param state
 * @param id
 */
export const selectScQuery = (state, id) =>
  fromClient.selectScQuery(state.client, id);

// Server selectors
// ----------------

export const selectClients = state => fromServer.selectClients(state.server);

/**
 * Select a client by id.
 *
 * @param state
 * @param id
 */
export const selectClient = (state, id) =>
  fromServer.selectClient(state.server, id);
