import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 24px;
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
                0 3px 1px -2px rgba(0,0,0,0.12), 
                0 1px 5px 0 rgba(0,0,0,0.2);
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    background-color: black;
    color: white;
    position: fixed;
    bottom: 0;
`;

const Container = styled.div`
    text-align: center;
    max-width: 800px;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    padding: 70px 10px;
    margin: auto;
`;

const App = () => (
    <div>
        <Header>Z-tech</Header>
        <Container>
            <SearchBar />
            <Route path="/products">
                <ProductList />
            </Route>
        </Container>
        <Footer>github.com/felipesalah - 2020</Footer>
    </div>
);

export default App;