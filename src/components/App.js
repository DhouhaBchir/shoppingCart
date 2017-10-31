import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../containers/ShoppingCartContainer';
// import ShoppingCartDetails from './pages/ShoppingCartDetails';
// import {Router, Route} from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
//
// const history = createBrowserHistory();


class App extends Component {

    // addRemoveProductToCart=(productId)=>{
    //     return ()=>{
    //         let products = this.state.productsList;
    //         products.forEach(function (product) {
    //             if(product.id === productId)
    //                 product.in_cart = !product.in_cart;
    //         });
    //         this.setState({productsList: products});
    //     }
    // };
    // removeFromCart=(productId)=>{
    //     return ()=>{
    //         let products = this.state.productsList;
    //         products.forEach(function (product) {
    //             if(product.id === productId)
    //                 product.in_cart = false;
    //         });
    //         this.setState({productsList: products});
    //     }
    // };
  render() {
      // {/*<Router history={history}>*/}
      //     {/*<div>*/}
      //         {/*<Route exact path="/"  render={() => <Home productsList={this.state.productsList} addRemoveProductToCart={this.addRemoveProductToCart}  removeFromCart={this.removeFromCart} />}/>*/}
      //         {/*<Route path="/cart_details" render={() => <ShoppingCartDetails productsList={this.state.productsList} addRemoveProductToCart={this.addRemoveProductToCart} removeFromCart={this.removeFromCart} />} />*/}
      //     {/*</div>*/}
      // {/*</Router>*/}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OStore</h1>
        </header>
        <Home/>

      </div>
    );
  }
}

export default App;
