import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import forecastReducer from './reducers/forecast';
// import {setAuthToken, refreshAuthToken} from './actions/auth';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    combineReducers({
        auth: authReducer,
        forecast: forecastReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
// const authToken = loadAuthToken();
// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
//     store.dispatch(refreshAuthToken());
// }

export default store;