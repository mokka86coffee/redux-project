import React from 'react';
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWorkTypesAsync } from './reducers/actions';
import Link from './Components/Link';

import Button from './Components/Button';

const enchancer = connect(
    ({ workTypes }) => ({ workTypes }),
    { fetchWorkTypesAsync }
);

class App extends React.Component {

    componentDidMount() {
    }

    FetchON = () => {
        this.controller = new AbortController();
        const signal = this.controller.signal;
        this.props.fetchWorkTypesAsync({signal});
    }

    FetchOFF = () => {
        this.controller.abort();
        this.controller = null;
    }

    render() {
        return (
            <div className="main" onClick={ this.handleClick }>                                       
                <div className="ins"></div>
                <Button onClick={this.FetchON}> Fetch </Button>
                <Button onClick={this.FetchOFF}> Cancel fetch </Button>
            </div>  
        )
    }
}

export default enchancer(App);