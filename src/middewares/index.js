import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'; 

const reduxLogger = createLogger({
    collapsed: true
});

export default applyMiddleware(
    thunkMiddleware,
    reduxLogger
);