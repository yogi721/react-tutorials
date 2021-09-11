import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const GlobalStyle = createGlobalStyle`
    body{
        background: white;
        min-height: 100vh;
        margin: 0;
        color: black;
        font-family: 'kaushan script';
    }
`;

function index() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default index
