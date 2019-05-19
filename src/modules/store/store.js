import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feelingsToAdd: action.payload};
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, understandingToAdd: action.payload};
    } else if (action.type === 'ADD_SUPPORT') {
        return {...state, supportToAdd: action.payload};
    } else if (action.type === 'ADD_COMMENT') {
        return {...state, commentsToAdd: action.payload};
    }
    return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);


export default storeInstance;