import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'
import reduxWebsocket from '@giantmachines/redux-websocket';

const reduxWebsocketMiddleware = reduxWebsocket();

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
