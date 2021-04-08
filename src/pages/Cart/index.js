import React from 'react';
import styles from './styles.module.scss';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import camera from '../../assets/images/img-carousel.png';

export default function Cart() {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartContent}>

        <div className={styles.row}>
          <div className={styles.containerImg}>
            <img src={camera} />
          </div>

          <div className={styles.contentDetails}>
            <div className={styles.containerDesc}>
              <p>Câmera fotográfica nikon <br /> <span>R$ 1000,00</span></p>
            </div>

            <div className={styles.containerQtd}>
              <button type="button">
                <MdRemoveCircleOutline size={22} color="#FFF" />
              </button>
              <input type="number" readOnly value={2} />
              <button type="button">
                <MdAddCircleOutline size={22} color="#FFF" />
              </button>
            </div>

            <div className={styles.containerTrash}>
              <MdDelete size={30} color="#EE4F4F" />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.containerImg}>
            <img src={camera} />
          </div>

          <div className={styles.contentDetails}>
            <div className={styles.containerDesc}>
              <p>Câmera fotográfica nikon <br /> <span>R$ 1000,00</span></p>
            </div>

            <div className={styles.containerQtd}>
              <button type="button">
                <MdRemoveCircleOutline size={22} color="#FFF" />
              </button>
              <input type="number" readOnly value={2} />
              <button type="button">
                <MdAddCircleOutline size={22} color="#FFF" />
              </button>
            </div>

            <div className={styles.containerTrash}>
              <MdDelete size={30} color="#EE4F4F" />
            </div>
          </div>
        </div>

        <div className={styles.footerCart}>
          <span>TOTAL</span>
          <strong>R$ 1920,00</strong>
        </div>
      </div>
    </div>
  )
}
