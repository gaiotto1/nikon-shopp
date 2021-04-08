export function updateProducts(dataProducts) {
  return {
    type: '@products/ADD_PRODUCTS',
    dataProducts,
  };
}

export function updateStock(item) {
  return {
    type: '@products/UPDATE_STOCK_ITEM',
    item,
  };
}


export function updateStockAfterRemoveItemCart(item) {
  return {
    type: '@products/UPDATE_STOCK_AFTER_REMOVE_ITEM_CART',
    item,
  };
}

export function clearProducts() {
  return {
    type: '@products/CLEAR_PRODUCTS',
  };
}
