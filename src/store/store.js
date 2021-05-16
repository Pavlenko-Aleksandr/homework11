import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';



const enchancer = applyMiddleware(thunk, logger);

export default createStore(reducer, enchancer);