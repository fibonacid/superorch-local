import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {

    const middlewares = [
        sagaMiddleware
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    sagaMiddleware.run(rootSaga);

    return store
}
