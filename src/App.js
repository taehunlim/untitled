import React from 'react';
import {Route, BrowserRouter, Switch}from 'react-router-dom';

import Login from "./pages/Login";

import './styles/reset.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
        </BrowserRouter>
    );
};

export default App;
