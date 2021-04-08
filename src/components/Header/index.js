import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { MdShoppingBasket } from 'react-icons/md'
import logo from '../../assets/images/logo.svg';

export function Header() {
  const cart = useSelector(state => state.cart.cart);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.link}>
          <img src={logo} alt="logo"/>
        </Link>
        <div className={styles.containerInfosCart}>
          <Link to="/carrinho" className={styles.linkCart}>
            <div>
              <strong>Meu Carrinho</strong>
              <span>{cart?.length > 0 ? cart?.length : '0'} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF" />
          </Link>
        </div>
      </div>
    </header>
  )
};
