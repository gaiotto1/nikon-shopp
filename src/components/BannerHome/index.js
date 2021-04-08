import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import * as CartAction from '../../store/modules/cart/actions';
import * as ProductsAction from '../../store/modules/products/actions';

import styles from './styles.module.scss';
import img from '../../assets/images/img-carousel.png'

export function BannerHome() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [productBanner, setProductBanner] = useState({
    name: '',
    summary: '',
    price: {
      formattedValue: 0,
    },
    stock: {
      stockLevel: 0,
    }
  });

  function addProduct (item) {
    let newItem = {
      ...item,
      id: item.id,
      qtd: 1,
    }
    dispatch(CartAction.addToCart(newItem));
    dispatch(ProductsAction.updateStock(newItem));

    toast.success('Produto adicionado ao carrinho');
  }

  useMemo(() => {
    const valores = products.map(({price}) => price.value)
    const menorValor = Math.min(...valores);
    const idProductMenorValor = products.findIndex(p => p.price.value == menorValor);
    setProductBanner(products[idProductMenorValor]);
    console.log('banner', idProductMenorValor);
  }, [products]);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <img src={img} alt="Banner" />
        <div className={styles.contentInfo}>
          <p className={styles.title}>{productBanner?.name}</p>
          <p className={styles.text}>{productBanner?.summary}</p>
          <div className={`${styles.button} ${styles.price}`}>{productBanner?.price.formattedValue}</div>
          {productBanner?.stock.stockLevel > 0 ? (
            <button type="button" className={`${styles.button} ${styles.addButton}`} onClick={() => {
              addProduct(productBanner);
            }}>Add to cart</button>
          ) : (
            <button type="button" className={`${styles.button} ${styles.disabledButton}`}>Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  )
}
