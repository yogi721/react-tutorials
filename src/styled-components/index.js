import React from 'react'
import { Button } from './common/Button'
import { createGlobalStyle } from 'styled-components'

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
            <h1>
                Styled Components
            </h1>
            <Button>
                Primary Button
            </Button>
            <Button secondary>
                Secondary Button
            </Button>
            <Button large>Large Button</Button>
        </>
    )
}

export default index
