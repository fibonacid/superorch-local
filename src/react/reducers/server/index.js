import { combineReducers } from "redux";
import clients from "./clients";
import status from "./status";

const server = combineReducers({
  clients,
  status
});

export default server;
