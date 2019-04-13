import middleware from '../middewares';
import reducer from '../reducers';

const store = {
    workTypes: []
}

export default createStore(
    reducer,
    store,
    middleware
);