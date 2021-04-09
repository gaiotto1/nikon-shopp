import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import * as ProductsAction from '../../store/modules/products/actions';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { MdShoppingBasket } from 'react-icons/md'
import logo from '../../assets/images/logo.svg';

export function Header() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const loadProducts = async () => {
    try {
      const { data } = await api.get('http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product/products');

      let newArrayProducts = []
      data.products.map((product, index) => {
        newArrayProducts.push({
          ...product,
          id: index
        })
      })
      dispatch(ProductsAction.updateProducts(newArrayProducts));
    } catch (error) {
      toast.error("Falha ao buscar os produtos.");
    }
  }

  useEffect(() => {
    if (cart.length === 0) {
      console.log('ok');
      loadProducts();
    }
  }, []);

  return (
    <>
      <div className={styles.space}></div>
      <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.link}>
          <img src={logo} alt="logo"/>
        </Link>
        <div className={styles.containerInfosCart}>
          <Link to="/carrinho" className={styles.linkCart}>
            <div>
              <strong>My Cart</strong>
              <span>{cart?.length > 0 ? cart?.length : '0'} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF" />
          </Link>
        </div>
      </div>
    </header>
    </>
  )
};
