import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function OktaRouter(props) {
    return (
        <Router>
            {props.children}
        </Router>
    );
}

export default OktaRouter;
