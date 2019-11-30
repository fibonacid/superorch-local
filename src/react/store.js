import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/root'
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./saga/rootSaga";
import reduxWebsocket from "@giantmachines/redux-websocket";
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware();

const reduxWebsocketMiddleware = reduxWebsocket({
    /*reconnectInterval: 10000,
    reconnectOnClose: true,
    onOpen: (socket) => {}*/
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
