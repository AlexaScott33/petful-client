import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/cat';
import dogsReducer from './reducers/dog';

export default createStore(
    combineReducers({
        catsReducer,
        dogsReducer
    }),
    applyMiddleware(thunk)
);