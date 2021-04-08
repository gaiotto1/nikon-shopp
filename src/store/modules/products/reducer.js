import produce from 'immer';

const initialState = {
  products: [
    {
      name: '',
      summary: '',
      price: {
        formattedValue: 0,
      },
      stock: {
        stockLevel: 0,
      }
    },
    {
      name: '',
      summary: '',
      price: {
        formattedValue: 0,
      },
      stock: {
        stockLevel: 0,
      }
    },
    {
      name: '',
      summary: '',
      price: {
        formattedValue: 0,
      },
      stock: {
        stockLevel: 0,
      }
    },
    {
      name: '',
      summary: '',
      price: {
        formattedValue: 0,
      },
      stock: {
        stockLevel: 0,
      }
    },
    {
      name: '',
      summary: '',
      price: {
        formattedValue: 0,
      },
      stock: {
        stockLevel: 0,
      }
    },
    {
      name: '',
      summary: '',
      price: {
        formattedValue: 0,
      },
      stock: {
        stockLevel: 0,
      }
    },
  ],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case '@products/ADD_PRODUCTS':
      return produce(state, draft => {
        const { dataProducts } = action;
        draft.products = dataProducts;
      });

    case '@products/CLEAR_PRODUCTS':
      return produce(state, draft => {
        draft.products = [];
      });

    case '@products/UPDATE_STOCK_ITEM':
      return produce(state, draft => {
        const { item } = action;
        const productIndex = draft.products.findIndex(p => p.id === item.id);

        if(productIndex >= 0) {
          draft.products[productIndex] = {
            ...draft.products[productIndex],
            stock: {
              stockLevel: draft.products[productIndex].stock.stockLevel - 1
            }
          };
        }
      });

    case '@products/UPDATE_STOCK_AFTER_REMOVE_ITEM_CART':
      return produce(state, draft => {
        const { item } = action;
        const productIndex = draft.products.findIndex(p => p.id === item.id);
        console.log('item atual ao remover', item);

        if(productIndex >= 0) {
          draft.products[productIndex].stock.stockLevel =  draft.products[productIndex].stock.stockLevel + item.qtd;
        }
      });

    default:
      return state;
  }
}
