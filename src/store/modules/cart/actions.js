export function addToCart(item) {
  console.log('add to cart');
  return {
    type: '@cart/ADD_TO_CART',
    item,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}
