import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="products_item">
                <img src={'/src/product.png'} className="product_logo" alt="logo"/>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price} $</p>
                <button onClick={()=>{this.props.addRemoveProductToCart(this.props.product.id)}} className={this.props.product.in_cart ? "red": "green"}>
                    {this.props.product.in_cart ? "remove from cart": "add to cart"}
                </button>
            </div>
        );
    }
}

export default ProductItem;
