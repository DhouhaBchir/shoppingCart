import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

let initialState = {
    productsList: [
        {
            id: 1,
            name: "Product 1",
            price: 5,
            logo: "product.png",
            in_cart: true
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

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

