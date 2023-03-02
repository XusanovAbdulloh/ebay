import React, { useState } from 'react';
import Container from "../../utils/Container";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { VscChevronDown } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import instanse from "../../api/instanse";
import { useSelector } from 'react-redux';
import UseFetchData from '../../hooks/UseFetchData';

const Header = () => {
   const createUserData = useSelector(state => state.mainReducer);
   console.log(createUserData)
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState("");
   const giveSearchSuggestions = (e) => {
      setSearchValue(e.target.value);
      instanse.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
         .then(response => setSearchResult(response.data))
         .catch(err => console.log(err));
   }
   const giveMoreResults = (e) => {
      e.preventDefault();
      window.location.pathname = `/search/${searchValue}`;
   }
   const location = useLocation();
   const [data] = UseFetchData("/categories?offset=0&limit=5");
   console.log(data);

   return location.pathname.includes("/auth") ? <></> : (
      <Container>
         <div className="header">
            <div className="header__items">
               <div className="header__item__item-1">
                  <p className='header-p'>Hi!</p>
                  <Link to="/auth/login" className='header-link'>  Sign in</Link>
                  <p className='header-p'>or</p>
                  <Link to="/auth/create" className='header-link2'>{
                     createUserData.name ? createUserData.name : <p>register</p>
                  }</Link>
                  <ul>
                     <li>
                        <a href="">Daily Deals</a>
                     </li>
                     <li>
                        <a href="">Brand Outlet</a>
                     </li>
                     <li>
                        <a href="">Help & Contact</a>
                     </li>
                  </ul>
               </div>
               <div className="header__item__item-2">
                  <ul>
                     <li>
                        <a href="">Sell</a>

                     </li>
                     <li>
                        <Link to="/like">Watchlist</Link>
                     </li>
                     <li>
                        <a href="">My eBay</a>
                     </li>
                  </ul>
                  <div className="header__icons">
                     <BiBell />
                     <SlBasket />
                  </div>
               </div>
            </div>
            <div className="header-wrapper">
               <img className='header-logo' src="https://pngimg.com/uploads/ebay/ebay_PNG22.png" alt="" />
               <p className='header-wrapper__item'>Shop by category</p>
               <VscChevronDown />
               <div className="header-wrraper__input-box">
                  <form onSubmit={giveMoreResults}>
                     <AiOutlineSearch />
                     <input onChange={giveSearchSuggestions} className='search-input' type="search" placeholder='   Search for anything' />
                     {searchResult?.length > 0 && searchValue ? <div className='search-sugestions'>
                        {
                           searchResult.map(searchItem =>
                              <Link className='search-item__link' to={`/product/${searchItem.id}`}>
                                 <p className='search-result-p'>{searchItem.title}</p>
                              </Link>
                           )
                        }
                     </div> : <></>}
                     <select>
                        <option>All Categories</option>
                        {
                           data.map(option =>
                                <option key={option.id}>{option.name}</option>
                              )
                        }
                     </select>
                     <button className='form-btn' type='submit'>Search</button>
                  </form>
               </div>
            </div>
         </div>
      </Container>
   );
}

export default Header;
