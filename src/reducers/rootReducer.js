import { combineReducers } from "redux";
import {baseReducer} from "./baseReducer";
import {chatsReducer} from "./chatsReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    base: baseReducer,
    chats: chatsReducer,
    users: usersReducer
});
