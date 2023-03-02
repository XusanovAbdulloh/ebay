import React from 'react';
import "./ChildrenProducts.css";
import UseFetchData from "../../../hooks/UseFetchData";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const ChildrenProducts = () => {
    const [data, isLoading] = UseFetchData("/categories/2/products?offset=0&limit=7");
    return (
        <div>
            <div className="products-text-box">
               <h2>Extra 20% off for Presidents' Day</h2>
               <span>|</span>
               <Link to="/category/2">See all</Link>
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
        </div>
    );
}

export default ChildrenProducts;
