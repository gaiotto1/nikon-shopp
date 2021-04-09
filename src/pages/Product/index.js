import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Parser from 'html-react-parser';
import { toast } from 'react-toastify';
import api from '../../services/api';

import * as CartAction from '../../store/modules/cart/actions';
import * as ProductsAction from '../../store/modules/products/actions';

import styles from './styles.module.scss';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import camera from '../../assets/images/img-product.png';

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [index, setIndex] = useState(0);
  const [produto, setProduto] = useState({
    name: '',
    price: {
      formattedValue: '',
    },
    summary: '',
    description: '',
    stock: {
      stockLevel: 0,
    }
  });
  const { id } = useParams();

  const load = async () => {
    try {
      const responseProducts = await api.get(`http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product/products`);
      const { data } = await api.get(`http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product/${id}`);

      setProduto(data);
      let productIndex = null;
      if (products[0].name !== '') {
        productIndex = products.findIndex(p => p.code === data.code);
      } else {
        productIndex = responseProducts.data.products.findIndex(p => p.code === data.code);
      }
      setIndex(productIndex);
    } catch (error) {
      toast.error("Falha ao buscar os produtos.");
    }
  }

  function addProduct (item) {
    let newItem = {
      ...item,
      id: index,
      qtd: 1,
    }
    dispatch(CartAction.addToCart(newItem));
    dispatch(ProductsAction.updateStock(newItem));

    toast.success('Produto adicionado ao carrinho');
  }

  useEffect(() => {
    load();
  }, []);

  useMemo(() => {
    if (products[0].name !== '') {
      setProduto(products[index]);
    }
  }, [products]);

  return (
    <div className={styles.productContainer}>
      <div className={styles.productContent}>
        <div className={styles.containerImage}>
          <img src={camera} alt="camera" />
        </div>

        <div className={styles.containerDescription}>
          <h1 className={styles.title}>
            {produto?.name}
          </h1>
          <div className={styles.containerStar}>
            <FaStar className={styles.icon}/>
            <FaStar className={styles.icon}/>
            <FaStar className={styles.icon}/>
            <FaStar className={styles.icon}/>
            <FaStarHalfAlt className={styles.icon}/>
          </div>
          <p className={styles.price}>{produto?.price.formattedValue}</p>
          <p className={styles.price2}>Em 1x no cartão de crédito.</p>

          {products[index].stock.stockLevel > 0 ? (
            <button className={styles.addToCart} type="button" onClick={() => {
              addProduct(produto);
            }}>Add to cart</button>
          ) : (
            <button className={styles.disabledToCart} type="button">Out of Stock</button>
          )}

          <p className={styles.titleDesc}>Summary</p>
          <p className={styles.textDesc}>
            {produto?.summary}
          </p>

          <p className={styles.titleDesc}>Description</p>
          <p className={styles.textDesc}>{Parser(produto?.description)}</p>
        </div>
      </div>
    </div>
  );
}
