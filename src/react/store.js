import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root";
import createSagaMiddleware from "redux-saga";
import { root } from "./saga/rootSaga";
import reduxWebsocket from "@giantmachines/redux-websocket";

const sagaMiddleware = createSagaMiddleware();

const reduxWebsocketMiddleware = reduxWebsocket({});

export default function configureStore(preloadedState) {
  const middlewares = [reduxWebsocketMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(root);

  return store;
}
