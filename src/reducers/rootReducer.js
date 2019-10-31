import { combineReducers } from "redux";
import {baseReducer} from "./baseReducer";
import {documentReducer} from "./documentReducer";

export const rootReducer = combineReducers({
    base: baseReducer,
    document: documentReducer
});
