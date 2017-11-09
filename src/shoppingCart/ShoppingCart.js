import React, { Component } from 'react';
import ProductsCartList from './ProductsCartList';

class ShoppingCart extends Component {
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

export  default  ShoppingCart;
