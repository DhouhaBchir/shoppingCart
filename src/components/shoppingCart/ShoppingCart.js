import React, { Component } from 'react';
import '../App.css';
import ProductsCartList from './ProductsCartList';
import {Link} from 'react-router-dom';
class ShoppingCart extends Component {
// <Link to={`/cart_details`} className="link">My Cart</Link>
    render() {
        let total = this.props.productsList.reduce(function (a,b) {
            if(b.in_cart) return (a + b.price);
            else return a;
        }, 0);
        return (
            <div className="shopping_cart">
                <ProductsCartList productsList={this.props.productsList} removeFromCart={this.props.removeFromCart}/>
                <p>Total: {total}</p>
            </div>
        );
    }
}

export default ShoppingCart;
