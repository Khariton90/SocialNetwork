import { combineReducers, createStore } from "redux";
import homeReducer from './homeReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    homePage:homeReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
});

let store = createStore(reducers);

export default store;