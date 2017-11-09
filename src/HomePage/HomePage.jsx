import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsList  from '../shoppingCart/ProductsList';
import ShoppingCart  from '../shoppingCart/ShoppingCart';


import { userActions, productsActions } from '../_actions';

class HomePage extends React.Component {

    render() {
        const { user, productsList, addToCart, removeFromCart } = this.props;
        return (
            <div>
                <div className="col-md-6 col-md-offset-3">
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in !!</p>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <ProductsList productsList={productsList} addRemoveProductToCart={addToCart}/>
                    </div>
                    <div className="col-md-4">
                        <ShoppingCart productsList={productsList} removeFromCart={removeFromCart} />
                    </div>
                </div>

            </div>
    );
    }
}

function mapStateToProps(state) {
    const { productsList, authentication } = state;
    const { user } = authentication;
    return {
        user,
        productsList
    };
}

const mapDispatchToProps = {
    addToCart: productsActions.addToCart,
    removeFromCart: productsActions.removeFromCart
};

const connectedHomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export { connectedHomePage as HomePage };
