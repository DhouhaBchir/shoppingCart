import React, { Component } from 'react';
import ProductItem from './ProductItem';
import '../App.css';

class ProductsList extends Component {
    render() {
        return (
            <div className="products_list">
                {
                    this.props.productsList.map((product)=> {
                            return <ProductItem key={product.id} product={product} addRemoveProductToCart={this.props.addRemoveProductToCart}/>
                        }
                    )
                }
            </div>
        );
    }
}

export default ProductsList;
