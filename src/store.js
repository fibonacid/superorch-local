import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'
import reduxWebsocket from '@giantmachines/redux-websocket';

// @see https://github.com/giantmachines/redux-websocket#available-options
const reduxWebsocketMiddleware = reduxWebsocket({
    // Defaults to false. If set to true, will attempt to reconnect when conn is closed without error event
    // e.g. when server closes connection
    reconnectOnClose: true,
});

export default function configureStore(preloadedState) {

    const middlewares = [
        reduxWebsocketMiddleware
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}
