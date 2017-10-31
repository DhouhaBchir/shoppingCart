import React, { Component } from 'react';
import '../App.css';

class ProductItem extends Component {
    render() {
        return (
            <div className="products_item">
                <img src={this.props.product.logo} className="product_logo"/>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price} $</p>
                <button onClick={()=>{this.props.addRemoveProductToCart(this.props.product.id)}}>
                    {this.props.product.in_cart ? "remove from cart": "add to cart"}
                </button>
            </div>
        );
    }
}

export default ProductItem;
