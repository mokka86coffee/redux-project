import { createStore } from 'redux';
import middlewares from '../middewares';
import reducer from '../reducers';

const store = {
    workTypes: []
}

export default createStore(
    reducer,
    store,
    middlewares
);