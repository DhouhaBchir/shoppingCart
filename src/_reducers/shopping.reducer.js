
export function productsList(state = {}, action) {
  switch (action.type) {
      case 'ADD_TO_CART':
          return state.map(product =>
              (product.id === action.id)
                  ? {...product, in_cart: !product.in_cart}
                  : product
          );
      case 'REMOVE_FROM_CART':
          return state.map(product =>
              (product.id === action.id)
                  ? {...product, in_cart: false}
                  : product
          );
    default:
      return state
  }
}