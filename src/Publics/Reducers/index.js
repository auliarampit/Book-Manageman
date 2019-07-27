import { combineReducers } from "redux";

import book from './book'
import login from '../Reducers/login'

const appReducer = combineReducers({
    book,
    login
});

export default appReducer;