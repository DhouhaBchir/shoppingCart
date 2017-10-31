import React, { Component } from 'react';
import '../App.css';
import ProductcartItem from './ProductCartItem';

class ProductsCartList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.productsList.map((product)=> {
                        if (product.in_cart)
                            return (<ProductcartItem key={product.id} product={product} removeFromCart={this.props.removeFromCart}/>)
                        }
                    )
                }
            </div>
        );
    }
}

export default ProductsCartList;
