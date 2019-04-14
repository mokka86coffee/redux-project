import React from 'react';
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWorkTypesAsync } from './reducers/actions';
import Link from './Components/Link';

import Button from './Components/Button';

const enchancer = connect(
    ({ workTypes, isLoading }) => ({ workTypes, isLoading }),
    { fetchWorkTypesAsync }
);

class App extends React.Component {

    componentDidMount() {
    }

    FetchON = () => {
        const { isLoading } = this.props;

        if ( !isLoading ) {
			console.log("TCL: App -> FetchON -> isLoading", isLoading)
            this.controller = new AbortController();
            const signal = this.controller.signal;
            this.props.fetchWorkTypesAsync({signal});
        }
    }

    FetchOFF = () => {
        if(this.controller) {
            this.controller.abort();
            this.controller = null;
        }
    }

    render() {
        return (
            <div className="main" onClick={ this.handleClick }>                                       
                <div className="ins"></div>
                <Button onClick={this.FetchON}> Fetch </Button>
                <Button onClick={this.FetchOFF}> Cancel fetch </Button>
                <Link  />
            </div>  
        )
    }
}

export default enchancer(App);