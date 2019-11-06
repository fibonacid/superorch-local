import { combineReducers } from "redux";
import {baseReducer} from "./baseReducer";
import {chatReducer} from "./chatReducer";
import {notificationsReducer} from "./notificationsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    base: baseReducer,
    chat: chatReducer,
    notifications: notificationsReducer
});
