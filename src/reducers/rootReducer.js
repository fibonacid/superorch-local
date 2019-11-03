import { combineReducers } from "redux";
import {baseReducer} from "./baseReducer";
import {chatReducer} from "./chatReducer";

export const rootReducer = combineReducers({
    base: baseReducer,
    chat: chatReducer
});
