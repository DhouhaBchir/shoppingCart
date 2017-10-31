import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import ProductsList from '../allProducts/ProductsList';
import ShoppingCart from '../shoppingCart/ShoppingCart';


const Home = ({ productsList, addToCart, removeFromCart }) => (
    <div className="global_div">
        <ProductsList productsList={productsList} addRemoveProductToCart={addToCart}/>
        <ShoppingCart productsList={productsList} removeFromCart={removeFromCart}/>
    </div>
);

Home.propTypes = {
    productsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        in_cart: PropTypes.bool.isRequired,
        logo: PropTypes.string.isRequired,
        name: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
};

export default Home
