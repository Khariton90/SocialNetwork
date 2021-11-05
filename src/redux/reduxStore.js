import { combineReducers, createStore } from "redux";
import homeReducer from './homeReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
    homePage:homeReducer,
    dialogsPage:dialogsReducer
});

let store = createStore(reducers);

export default store;