import { createStore } from 'redux';
import middleware from '../middewares';

const store = {
    parts: []
}

export default createStore(
    reducer,
    store,
    middleware
);