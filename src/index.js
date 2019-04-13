import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import './index.scss';

const reducer = ( store, action ) => {
   return {a: store.a+1};
}
const store = createStore(reducer,{
    a: 1
}, applyMiddleware(reduxLogger) );


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// import {Parody} from './Parody';
