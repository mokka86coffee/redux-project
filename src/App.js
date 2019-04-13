import React from 'react';
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { fetchWorkTypes, fetchWorkTypesDone, fetchWorkTypesAsync } from './reducers/actions';

const enchancer = connect(
    ({ workTypes }) => ({ workTypes }),
    { fetchWorkTypes, fetchWorkTypesDone, fetchWorkTypesAsync }
);

class App extends React.Component {

    async componentDidMount() {
        // this.props.fetchWorkTypes();
        
        // let result = await axios.get('https://api1.remontista.ru/tools/all_work_type');
        
        // this.props.fetchWorkTypesDone(result.data);

        this.props.fetchWorkTypesAsync();
    }

    handleClick = () => {
        
    }

    render() {
        return (
            <div className="main" onClick={ this.handleClick }>                                       
                <div className="ins"></div>
            </div>  
        )
    }
}

export default enchancer(App);