import React from 'react';

import styles from './styles.module.scss';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import camera from '../../assets/images/img-product.png';

export default function Product() {
    return (
      <div className={styles.productContainer}>
        <div className={styles.productContent}>
          <div className={styles.containerImage}>
            <img src={camera} alt="camera" />
          </div>

          <div className={styles.containerDescription}>
            <h1 className={styles.title}>
              Sony Alpha a6000 Mirrorless Digital Camera with 16-50mm Lens (Black)
            </h1>
            <div className={styles.containerStar}>
              <FaStar className={styles.icon}/>
              <FaStar className={styles.icon}/>
              <FaStar className={styles.icon}/>
              <FaStar className={styles.icon}/>
              <FaStarHalfAlt className={styles.icon}/>
            </div>
            <p className={styles.price}>R$ 15.000,00</p>
            <p className={styles.price2}>Em 1x no cartão de crédito.</p>
            <button className={styles.addToCart} type="button">Add to cart</button>

            <p className={styles.titleDesc}>Descrição</p>
            <p className={styles.textDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            </p>

          </div>
        </div>
      </div>
    );
}
