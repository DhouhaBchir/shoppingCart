import React, { Component } from 'react';
import '../App.css';
import ProductCartDetailsItem from './ProductCartDetailsItem';

class ProductsCartListDetails extends Component {
    render() {
        return (
            <div  className="product_cart_details_div">
                {
                    this.props.productsList.map((product)=> {
                            if (product.in_cart)
                                return (<ProductCartDetailsItem key={product.id} product={product} removeFromCart={this.props.removeFromCart}/>)
                        }
                    )
                }
            </div>
        );
    }
}

export default ProductsCartListDetails;
