import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import artistReducer from './reducers/artist';
import otherReducer from './reducers/other';


const store = createStore(
    combineReducers({
        artist: artistReducer,
        other: otherReducer
    }),
    applyMiddleware(thunk)
);


export default store;