import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { Provider } from 'react-redux';
import store from './reduxStore';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// import {Parody} from './Parody';
