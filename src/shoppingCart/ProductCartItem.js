import React, { Component } from 'react';

class ProductcartItem extends Component {
    render() {
        return (
            <div className="product_cart_item">
                <img src={'/src/product.png'} className="product_cart_logo"/>
                <p className="product_cart_name">{this.props.product.name}</p>
                <p>{this.props.product.price}$</p>
                <button onClick={()=>this.props.removeFromCart(this.props.product.id)} className="product_cart_remove">
                    X
                </button>
            </div>
        );
    }
}

export default ProductcartItem;
