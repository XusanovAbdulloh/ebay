import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Swiper.css";
import UseFetchData from '../../../hooks/UseFetchData';
import { Link } from "react-router-dom";

const Swipersss = () => {
    const [data, isLoading] = UseFetchData("/categories/4/products?offset=0&limit=20");
    console.log(data);
    return (
            <Swiper
                spaceBetween={10}
                slidesPerView={6.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {!isLoading ?
                    data.map(product =>
                        <SwiperSlide key={product.id}>
                            <div className='swiper-divv'>
                                <Link key={product.id} to={`/product/${product.id}`}>
                                    <img className='product-item__image' src={product.images[0]} alt="" />
                                </Link>
                                <div className='product-infooo'>
                                        <strong>{product.price}$</strong>
                                    <div className="product-info__prices">
                                        <del className='product-price'>$74.99</del>
                                        <span>-</span>
                                        <p className='product-price'>72% OFF</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                    : <h1 className='loading'>Loading...</h1>}
            </Swiper>
    );
}

export default Swipersss
