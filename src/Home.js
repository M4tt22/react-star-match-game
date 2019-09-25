import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Router>
                    <Link to="/Transactions">Transactions</Link>
                </Router>

                <Route path="/Transactions" component={} />
            </div>
        )
    }
}

