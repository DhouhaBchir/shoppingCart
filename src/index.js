import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

let initialState = {
    shoppingCart: [
        {
            id: 1,
            name: "Product 1",
            price: 5,
            logo: "product.png",
            in_cart: false
        },
        {
            id: 2,
            name: "Product 2",
            price: 23,
            logo: "product.png",
            in_cart: false
        },
        {
            id: 3,
            name: "Product 3",
            price: 55,
            logo: "product.png",
            in_cart: false
        },
        {
            id: 4,
            name: "Product 4",
            price: 66,
            logo: "product.png",
            in_cart: false
        },
        {
            id: 5,
            name: "Product 5",
            price: 44,
            logo: "product.png",
            in_cart: false
        },
        {
            id: 6,
            name: "Product 6",
            price: 70,
            logo: "product.png",
            in_cart: false
        },
        {
            id: 7,
            name: "Product 7",
            price: 20,
            logo: "product.png",
            in_cart: false
        },
        {
            id: 8,
            name: "Product 8",
            price: 30,
            logo: "product.png",
            in_cart: false
        }
    ]
};

const store = createStore(reducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
