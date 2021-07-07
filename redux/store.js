import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducer from './vegan/reducer';
import allFatReducer from './peanutfree/reducer';
import logger from 'redux-logger';

const reducer = combineReducers({
  allReducer: allReducer,
  allFatReducer: allFatReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
