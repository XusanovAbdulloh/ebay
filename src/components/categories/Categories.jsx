import React from 'react';
import UseFetchData from '../../hooks/UseFetchData';
import Container from '../../utils/Container';
import { Link } from "react-router-dom";
import img1 from "./img/1img.png";
import img2 from "./img/2img.png";
import img3 from "./img/3img.png";
import { VscArrowRight } from "react-icons/vsc";
import  Swipers  from '../swiper/Swiper';
import "./Categories.css"

const Categories = () => {
    const [data] = UseFetchData("/categories?offset=0&limit=6");
    return (
        <Container>
            <div className='category-box'>
            {
                data.map(category =>
                     <Link className='category-link' key={category.id} to={`/category/${category.id}`}>{category.name}</Link>
                    )
            }
        </div>
        <div className="categories-banner">
            <div className="categories-banner__items">
                <h2 className='categories-banner__h2'>Super savings at the Brand Outlet</h2>
                <p className='categories-banner__text'>Up to 60% off the brands you love.</p>
                <div className="categories-banner__btn">
                  <p>Shop now</p>
                  <VscArrowRight/>
                </div>
            </div>
            <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
        </div>
        <div className="categories__swiper-wrapper-1">
            <div className='categories__swiper-wrapper-1__items'>
                  <h2 className='categories__swiper-wrapper-1__items__h2'>Up to 60% off home must-haves</h2>
                  <p className='categories__swiper-wrapper-1__items__p'>Shop mattresses, toppers, and more.</p>
                  <div className="categories__swiper-wrapper-1__items__btn">
                  <Link to="/category/3">
                  <p>Shop now</p>
                  <VscArrowRight/>
                  </Link>
                </div>
            </div>
            <Swipers/>
        </div>
        </Container>
    );
}

export default Categories;
