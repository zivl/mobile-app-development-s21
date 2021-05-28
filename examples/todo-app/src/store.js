import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

export const createNewStoreForTests = () => createStore(rootReducer, applyMiddleware(thunk));

export const store = createStore(rootReducer, applyMiddleware(thunk));
