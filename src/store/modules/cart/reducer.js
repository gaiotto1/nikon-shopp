import produce from 'immer';

const initialState = {
  cart: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      console.log('@cart/ADD_TO_CART');
      return produce(state, draft => {
        const { item } = action;
        const productIndex = draft.cart.findIndex(p => p.id === item.id);

        if(productIndex >= 0) {
          draft.cart[productIndex].qtd += 1;
        } else {
          draft.cart.push(item);
        }
      });

    case '@cart/REMOVE_FROM_CART':
      return produce(state, draft => {
        const { id } = action;
        const productIndex = draft.cart.findIndex(p => p.id === id);
        console.log('id', id);
        let newCart = [];
        draft.cart.map((item) => {
          if (item.id !== id) {
            newCart.push(item);
          }
        })
        if(productIndex >= 0) {
          draft.cart = newCart;
        }
      });

    default:
      return state;
  }
}
