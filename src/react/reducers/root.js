import { combineReducers } from "redux";
import sharedReducers from "../../shared/reducers";
import base from "./base";
import flash from "./flash";

const root = combineReducers({
  base,
  flash,
  ...sharedReducers
});

export default root;
