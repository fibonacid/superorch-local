import { combineReducers } from "redux";
import {baseReducer} from "./baseReducer";

export const rootReducer = combineReducers({
    base: baseReducer
});
