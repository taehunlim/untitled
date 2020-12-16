import React from 'react';
import {Route, BrowserRouter, Switch}from 'react-router-dom';

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import ProductList from './pages/ProductList';

import './styles/reset.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" render={props => <Login {...props}/>} />
                <Route path="/register" render={props => <Register{...props}/>} />
                <Route path="/detail" render={props => <ProductDetail {...props} />} />
                <Route path="/" render={props => <ProductList{...props}/>} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
