import React, { Component } from 'react';
import '../App.css';
import ProductsCartListDetails from '../shoppingCartDetails/ProductsCartListDetails';

class ShoppingCartDetails extends Component {
    render() {
        let total = this.props.productsList.reduce(function (a,b) {
            if(b.in_cart) return (a + b.price);
            else return a;
        }, 0);
        return (
            <div className="shopping_cart_details">
                <h2>My Cart</h2>
                <ProductsCartListDetails productsList={this.props.productsList} removeFromCart={this.props.removeFromCart}/>
                <div>
                    <p className="shopping_cart_details_total">Total: {total}</p>
                </div>
            </div>
        );
    }
}

export default ShoppingCartDetails;