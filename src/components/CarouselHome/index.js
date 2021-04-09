import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CartAction from '../../store/modules/cart/actions';
import * as ProductsAction from '../../store/modules/products/actions';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import { withSize } from 'react-sizeme';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

import camera from '../../assets/images/img-carousel.png';

SwiperCore.use([Navigation, Pagination]);

function CarouselHome({ size }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  function resizeCarousel () {
    if (size.width > 770) {
      return 3;
    } else if (size.width <= 500) {
      return 1;
    } else if (size.width <= 700) {
      return 2;
    }
  }

  function addProduct (index, item) {
    console.log('index', index)
    let newItem = {
      ...item,
      id: index,
      qtd: 1,
    }
    dispatch(CartAction.addToCart(newItem));
    dispatch(ProductsAction.updateStock(newItem));

    toast.success('Produto adicionado ao carrinho');
  }

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.carouselContent}>

        <Swiper
          spaceBetween={25}
          slidesPerView={resizeCarousel()}
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.next', prevEl: '.prev' }}
        >
          {products.map((item, index) => {
            return (
              <SwiperSlide>
                <div className={styles.card}>
                    <div className={styles.contentCard}>
                      <Link to={`/produto/${item.code}`}>
                        <img src={camera} alt="nikon-camera"/>
                        <p>{item.name}</p>
                        <h1>{item.summary}</h1>
                        <h2>{item.price.formattedValue}</h2>
                      </Link>
                      {item.stock.stockLevel > 0 ? (
                        <button type="button" className={styles.addButton} onClick={() => {addProduct(index, item)}}>
                        Add to cart
                      </button>
                      ) : (
                        <button type="button" disabled={true} className={styles.addButtonDisabled}>
                        Out of Stock
                      </button>
                      )}
                    </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default withSize()(CarouselHome);
