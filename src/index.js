import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';



const reducer = ( store, action ) => {
   return {a: store.a+1};
}
const store = createStore(reducer,{
    a: 1
});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// import {Parody} from './Parody';
