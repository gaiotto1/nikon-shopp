import React, {useMemo, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CartAction from '../../store/modules/cart/actions';
import * as ProductsAction from '../../store/modules/products/actions';

import styles from './styles.module.scss';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import camera from '../../assets/images/img-carousel.png';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const [total, setTotal] = useState(0);

  function removeItem(cartItem) {
    console.log('cartItem', cartItem);
    dispatch(CartAction.removeFromCart(cartItem.id));
    dispatch(ProductsAction.updateStockAfterRemoveItemCart(cartItem));
  }

  useMemo(() => {
    let totals = 0;
    cart.map((item) => {
      totals = totals + item.price.value * item.qtd;
    })
    setTotal(totals);
  }, [cart]);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartContent}>
        {cart.map((cartItem) => {
          return (
          <div className={styles.row}>
            <div className={styles.containerImg}>
              <img src={camera} />
            </div>

            <div className={styles.contentDetails}>
              <div className={styles.containerDesc}>
                <p>{cartItem.name} <br />
                <br />
                <p>{cartItem.summary} </p><br />
                <span>Valor: {cartItem.price.formattedValue}</span></p>
              </div>

              <div className={styles.containerQtd}>
                <label>Qtde:</label> <input type="number" readOnly value={cartItem.qtd} />
              </div>

              <div className={styles.containerTrash} onClick={() => {
                removeItem(cartItem);
              }}>
                <MdDelete size={30} color="#EE4F4F" />
              </div>
            </div>
          </div>
          );
        })}

        <div className={styles.footerCart}>
          <span>TOTAL</span>
          <strong>${total}</strong>
        </div>
      </div>
    </div>
  )
}
