import { createStore } from "redux";
import historyReducer from './../Reducer/historyReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    history: historyReducer,
    // other reducers...
  });
const store=createStore(rootReducer);

export default store;