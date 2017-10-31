import React, { Component } from 'react';
import '../App.css';

class ProductCartDetailsItem extends Component {
    render() {
        return (
            <div className="product_cart_item_details">
                <div>
                    <img src={this.props.product.logo} className="product_cart_details_logo"/>
                </div>
                <div>
                    <p className="product_cart_name">{this.props.product.name}</p>
                    <p>{this.props.product.price}$</p>
                    <button onClick={this.props.removeFromCart(this.props.product.id)} className="product_cart_remove">
                        X
                    </button>
                </div>
            </div>
        );
    }
}

export default ProductCartDetailsItem;
