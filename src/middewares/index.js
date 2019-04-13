import reduxLogger from 'redux-logger';
import { applyMiddleware } from 'redux';

export default applyMiddleware(reduxLogger);