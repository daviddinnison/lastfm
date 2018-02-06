import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import forecastReducer from "./reducers/forecast";
import thunk from "redux-thunk";

export const store = createStore(
  forecastReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
