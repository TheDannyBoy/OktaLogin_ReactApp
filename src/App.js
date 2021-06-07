import React from "react";
import { Route } from "react-router";
import "./App.css";
import RouterWithOktaSecurity from './components/RouterWithOktaSecurity';
import AuthHandlerComponent from './components/AuthHandlerComponent';

const App = () => {
    return (
        <RouterWithOktaSecurity>
            <Route component={AuthHandlerComponent} />
        </RouterWithOktaSecurity>
    );
};

export default App;
