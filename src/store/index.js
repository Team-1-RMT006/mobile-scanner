import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, homeReducer, scanReducer, visitorReducer } from './reducers';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer,
  scanReducer,
  visitorReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
