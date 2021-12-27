import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import { categoriesReducer } from './features/categoriesReducer';
import { petsReducer } from './features/petsReducer';
import { signInReducer } from './features/signInReducer';
import { signUpReducer } from './features/signUpReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    pets: petsReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
})

const logger = createLogger({
  diff: thunk,
  collapsed: true,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
