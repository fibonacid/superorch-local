import { combineReducers } from "redux";
import base from "./base";
import chat from "./chat/index";
import app from "./app";
import flash from "./flash";
import websocket from "./websocket";

const root = combineReducers({
    base,
    chat,
    app,
    flash,
    websocket
});

export default root;
