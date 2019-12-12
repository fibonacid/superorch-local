import { combineReducers } from "redux";
import clients, * as fromClients from "./clients";
import status from "./status";

const server = combineReducers({
  clients,
  status
});

export default server;

export const selectClients = state => state.clients;

export const selectClient = (state, id) =>
  fromClients.selectClient(state.clients, id);
