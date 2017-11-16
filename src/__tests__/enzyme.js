import React from 'react';
import ProductItem from '../shoppingCart/ProductItem';
import ProductsList from '../shoppingCart/ProductsList';
import {mount, shallow, render} from 'enzyme';
import { expect } from 'chai';

test('products_item_changes_status_on_click', () => {
    let _product =
        {
            id: 1,
            name: "Product 1",
            price: 5,
            logo: "product.png",
            in_cart: true
        };
    let removeProduct= function () {
      _product["in_cart"] = false;
      console.log(_product.in_cart);
    };

    const product =  shallow(
        <ProductItem product={_product} addRemoveProductToCart={removeProduct} />
    );

    expect(product.find('p').length).to.equal(2);
    expect(product.find('button').text()).to.equal("remove from cart");
    product.find('button').simulate("click");
});

describe('products_list', () => {
    let list;
    let _productsList=
        [
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
                price: 10,
                logo: "product.png",
                in_cart: false
            }
        ];

    beforeEach(() => {
        list = shallow(<ProductsList productsList={_productsList} />);
    });
    it('List renders products', () => {
        expect(list.find('ProductItem').length).to.equal(2);
    });
    it('Class of rendered list', () => {
        expect(list.find('.products_list').length).to.equal(1);
    });
});

