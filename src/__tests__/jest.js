import React from 'react';
import renderer from 'react-test-renderer';
import ShoppingCart from '../shoppingCart/ShoppingCart';

describe('ShoppingCart (Snapshot)', () => {
    let _products =
        [{
            id: 1,
            name: "Product 1",
            price: 5,
            logo: "product.png",
            in_cart: true
        },
        {
            id: 2,
            name: "Product 2",
            price: 5,
            logo: "product.png",
            in_cart: true
        }];
    let removeFromCart = function (id) {
        console.log("id, ", id);
    };
    it('Login Page renders Login', () => {
        const component = renderer.create(<ShoppingCart productsList={_products} removeFromCart={removeFromCart}/>);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});

