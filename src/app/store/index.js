import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import github from "./state/github";

export default function(initState = {}, extraEnhancers = []) {
  const stateReducers = {
    github
  };
  const reducer = combineReducers(stateReducers);
  const middleware = applyMiddleware(reduxThunk);

  // use redux dev tools extension (https://github.com/zalmoxisus/redux-devtools-extension)
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const enhancers = composeEnhancers(middleware, ...extraEnhancers);
  /* eslint-enable no-underscore-dangle */

  return createStore(reducer, initState, enhancers);
}
