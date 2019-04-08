import React from 'react';
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import  { Provider } from 'react-redux';
import  { createStore } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';


class App extends React.Component {

    async componentDidMount() {
        let result = await axios.get('https://api1.remontista.ru/tools/all_work_type');
		console.log("TCL: Sandbox -> componentDidMount -> result", result)
        
    }

    handleClick = () => {
        
    }

    render() {
        return (
            <div className="main" onClick={this.handleClick}>                                       
                <div className="ins"></div>
                <div className="ins"></div>
                <div className="ins"></div>
            </div>  
        )
    }
}

export default connect(sttore => store)(App)