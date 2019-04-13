import React from 'react';
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { fetchParts, fetchPartsDone } from './reducers/actions';

const enchancer = connect(
    ({ workTypes }) => ({ workTypes }),
    { fetchParts, fetchPartsDone }
);

class App extends React.Component {

    async componentDidMount() {
        this.props.fetchParts();
        
        let result = await axios.get('https://api1.remontista.ru/tools/all_work_type');
        
        this.props.fetchPartsDone(result.data);
    }

    handleClick = () => {
        
    }

    render() {
		console.log("TCL: App -> render -> this.props", this.props)
        return (
            <div className="main" onClick={ this.handleClick }>                                       
                <div className="ins"></div>
            </div>  
        )
    }
}

export default enchancer(App);