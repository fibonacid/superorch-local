export function createReduxStoreMiddleware(store) {
  return function(req, res, next) {
    req.store = store;
    next();
  };
}
