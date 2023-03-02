import React from 'react';
import "./MainProducts.css";
import UseFetchData from "../../hooks/UseFetchData";
import Container from "../../utils/Container";
import { VscArrowRight } from "react-icons/vsc";
import ChildrenProducts from './children-products/ChildrenProducts';
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import Swipersss from './swiper/Swiper';
import { Link } from 'react-router-dom';

const MainProducts = () => {
    const [data, isLoading] = UseFetchData("/categories/1/products?offset=0&limit=7");
    console.log(data);
    return (
        <Container>
            <div className="products-text-box">
               <h2>Score these trending kicks</h2>
               <span>|</span>
               <Link to="/category/1">See all</Link>
               <VscArrowRight/>
            </div>
           <div className="main-products-wrapper">
            {!isLoading ?
               data.map(product =>
                  <Link key={product.id} to={`/product/${product.id}`}>
                     <div className='main-products-wrapper__card' key={product.id}>
                    <img className='main-products-wrapper__card__img' src={product.images[0]} alt="" />
                    <h2 className='main-products-wrapper__card__title'>{product.title}</h2>
                  </div>
                  </Link>
                ): <h1>Loading...</h1>
                
            }
           </div>
           <ChildrenProducts/>
           <div className="main-products-img">
              <img className='img1' src={img1} alt="" />
              <img className='img2' src={img2} alt="" />
           </div>
           <div className="products-text-box">
               <h2>Today's Deals – All With Free Shipping</h2>
               <span>|</span>
               <a href="">See all</a>
               <VscArrowRight/>
            </div>
            <Swipersss/>
        </Container>
    );
}

export default MainProducts;
