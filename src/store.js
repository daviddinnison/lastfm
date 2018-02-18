import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import testReducer from './reducers/test';
import otherReducer from './reducers/other';


const store = createStore(
    combineReducers({
        test: testReducer,
        other: otherReducer
    }),
    applyMiddleware(thunk)
);


export default store;