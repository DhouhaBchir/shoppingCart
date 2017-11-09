export const productsActions = {
    addToCart,
    removeFromCart
};

function addToCart(id) {
    return { type: 'ADD_TO_CART',
        id: id
    };
}

function removeFromCart(id) {
    return { type: 'REMOVE_FROM_CART',
        id: id
    };
}