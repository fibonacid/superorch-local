import { combineReducers } from "redux";
import {baseReducer} from "./baseReducer";
import {chatReducer} from "./chatReducer";
import {notificationsReducer} from "./notificationsReducer";

export const rootReducer = combineReducers({
    base: baseReducer,
    chat: chatReducer,
    notifications: notificationsReducer
});
