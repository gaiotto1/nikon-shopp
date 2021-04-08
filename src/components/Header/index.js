import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { MdShoppingBasket } from 'react-icons/md'
import logo from '../../assets/images/logo.svg';

export function Header() {
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
              <span>3 itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF" />
          </Link>
        </div>
      </div>
    </header>
  )
};
