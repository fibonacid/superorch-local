import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/root'
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./saga/rootSaga";
import {setupSocket} from './socket/client';
import reduxWebsocket from "@giantmachines/redux-websocket";
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware();

const reduxWebsocketMiddleware = reduxWebsocket({
    prefix: "WEBSOCKET_",
    reconnectInterval: 2000,
    reconnectOnClose: true,
    //onOpen: (socket) => {}
});

export default function configureStore(preloadedState) {

    const middlewares = [
        reduxWebsocketMiddleware,
        sagaMiddleware
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    sagaMiddleware.run(rootSaga);

    return store
}
