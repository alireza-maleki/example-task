import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllDataReducer } from "./reducer";

const reducers = combineReducers({
    products: getAllDataReducer,
});



const middleware = [thunk];

const initialState = {};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;