import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Swiper.css";
import UseFetchData from '../../hooks/UseFetchData';
import { Link } from "react-router-dom";


const Swipers = () => {
    const [data, isLoading] = UseFetchData("/categories/3/products?offset=0&limit=20");
    return (
            <Swiper
                spaceBetween={10}
                slidesPerView={5.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {!isLoading ?
                    data.map(product =>
                        <SwiperSlide key={product.id}>
                            <div className='swiper-div'>
                                <Link key={product.id} to={`/product/${product.id}`}>
                                    <img className='product-item__image' src={product.images[0]} alt="" />
                                </Link>
                                <div className='product-infoo'>
                                    <div>
                                        <strong>{product.price}$</strong>
                                    </div>
                                    <div className="product-info__pricess">
                                        <del className='product-pricee'>$74.99</del>
                                        <span>-</span>
                                        <p className='product-pricee'>72% OFF</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                    : <h1 className='loading'>Loading...</h1>}
            </Swiper>
    );
}

export default Swipers
