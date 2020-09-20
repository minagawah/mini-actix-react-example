import { createStore as _createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './modules';

export const createStore = () => {
  return _createStore(rootReducer, applyMiddleware(thunkMiddleware));
};
