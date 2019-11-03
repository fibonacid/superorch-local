import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./saga/rootSaga";
import {setupSocket} from './socket/client'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {

    const middlewares = [
        sagaMiddleware
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    // Create WebSocket client
    const socket = setupSocket(store.dispatch, username);

    sagaMiddleware.run(rootSaga, {socket, username});

    return store
}
