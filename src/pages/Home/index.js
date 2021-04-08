import React, { useEffect } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import * as ProductsAction from '../../store/modules/products/actions';

import { BannerHome } from '../../components/BannerHome';
import CarouselHome from '../../components/CarouselHome';

export default function Home() {
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
      loadProducts();
    }
  }, []);

  return (
    <>
      <BannerHome />
      <CarouselHome />
    </>
  )
}
