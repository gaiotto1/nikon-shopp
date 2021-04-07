import React from 'react';

import { withSize } from 'react-sizeme';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

import camera from '../../assets/images/img-carousel.png';

SwiperCore.use([Navigation, Pagination]);

function CarouselHome({ size, produtos }) {

  function resizeCarousel () {
    if (size.width > 770) {
      return 3;
    } else if (size.width <= 500) {
      return 1;
    } else if (size.width <= 700) {
      return 2;
    }
  }

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Produtos</h2>
      <div className={styles.carouselContent}>

        <Swiper
          spaceBetween={25}
          slidesPerView={resizeCarousel()}
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.next', prevEl: '.prev' }}
        >
          {produtos.map((item) => {
            return (
              <SwiperSlide>
                <div className={styles.card}>
                  <div className={styles.contentCard}>
                    <img src={camera} alt="nikon-camera"/>
                    <p>{item.text1}</p>
                    <h1>{item.text2}</h1>
                    <h2>{item.price}</h2>
                    <button type="button" className={styles.addButton}>Add to cart</button>
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
