import React, { useState,useEffect } from 'react';
import "./Product.css";
import UseFetchData from "../../hooks/UseFetchData";
import { Link, useParams } from 'react-router-dom';
import Container from '../../utils/Container';
import { BsFillArrowLeftSquareFill, BsFillSuitHeartFill } from "react-icons/bs";
import {FiHeart} from "react-icons/fi"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import instance from '../../api/instanse';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const dispatch = useDispatch();
    const productIdData = useParams();
    const [data,isLoading] = UseFetchData(`/products/${productIdData.id}`);
    const [categoryData, setCategoryData] = useState([])
    const {likedProducts} = useSelector(state => state.likeReducer)

    useEffect(() =>{
      instance.get(`/products/?categoryId=${data?.category?.id}`)
       .then(response => {
        setCategoryData(response.data)
       })
       .catch(err =>{
        console.log(err)
       })
    }, [data?.category?.id])
    function trimDescription(str){
        return str.split(" ").slice(0, 10).join(" ") + "..."
      }
      function addToLike(product){
        dispatch({product, type: "LIKE_PRODUCT"})
      }
      function removeFromLikedProducts(data){
        dispatch({id: data.id, type: 'REMOVE_FROM_LIKED'})
      }
    return (
        <Container>
            <div className="product-items-wrapper">
                <Link to="/"><BsFillArrowLeftSquareFill /></Link>
                <Link to="/"><p className='product-items-wrapper__home-page-link'>Back to home page</p></Link>
                <p>| Listed in category:</p>
                <Link to="/category/2"><p className='product-items-wrapper__category-link'>Electronics  </p></Link>
                <Link to="/category/2"><p className='product-items-wrapper__category-link'>Cell Phones & Accessories </p></Link>
                <Link to="/category/2"><p className='product-items-wrapper__category-link'>Cell Phones & Smartphones </p></Link>
            </div>
            <div className='product-box'>
                <div className="product-box__img-div">
                    <img src={data.images?.at(0)} alt="" />
                </div>
                <div className="product-box__items">
                    <p className='product-box__items__text'>Condition:
                        {data.description}
                    </p>
                    <h2 className='product-box__items__title'>Model: {data.title}</h2>
                    <p className='product-box__items__carier'>Carrier: Cllasik</p>
                    <p className='product-box__items__id'>Quantity: {data.id}</p>
                    <div className='product-box__price-div'>
                        <div className='product-box__price-div-items-box'>
                            <p className='product-box__price-div__pp'>Price:</p>
                            <strong className='product-box__price-div__price'>US {data.price}$</strong>
                            <p className='product-box__price-div__text'>No Interest if paid in full in 6 mo on $99+*</p>
                        </div>
                        <div className='product-box__price-div__btns'>
                            <button className='product-box__price-div__btn1'>Buy It Now</button>
                            <button className='product-box__price-div__btn2'>Add to cart</button>
                            {likedProducts.find(p => p?.id === data?.id) ? <BsFillSuitHeartFill onClick={() =>removeFromLikedProducts(data)} style={{color: "red"}}/> : <FiHeart onClick={()=> addToLike(data)}/> }
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-boxxx">
            <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        {!isLoading?
            categoryData?.map(product => 
              <SwiperSlide>
              <div className='product-item' key={product.id}>
               <Link key={product.id} to={`/product/${product.id}`}>
               {
          product.images[0] && product.images[0].startsWith("https://") ?   
          <img className='product-item__image' src={product.images[0]} alt="" />
        :
       <img className='product-item__image' src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
        }
                <h3>{product.title}</h3>
               </Link>
               <div className='product-info'>
                 <div>
                  <p>{trimDescription(product.description)}</p>
                  <strong>${product.price}</strong>
                 </div>
                 {likedProducts.find(p => p?.id === product?.id) ? <BsFillSuitHeartFill onClick={() =>removeFromLikedProducts(product)} style={{color: "red"}}/> : <FiHeart onClick={()=> addToLike(product)}/> }
               </div>
              </div>  
              </SwiperSlide>
            )
            :
            <p>Loading...</p>
          }
      </Swiper>
            </div>
        </Container>
    );
}

export default Product;
