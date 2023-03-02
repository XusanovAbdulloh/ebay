import React from 'react';
import "./SearchResult.css";
import Container from "../../utils/Container";
import { Link, useParams } from 'react-router-dom';
import UseFetchData from "../../hooks/UseFetchData";
import { useDispatch, useSelector } from 'react-redux';
import { BsFillSuitHeartFill } from "react-icons/bs";
import {FiHeart} from "react-icons/fi"

const SearchResult = () => {
    const dispatch = useDispatch();
    const productInfo = useParams();
    const [data] = UseFetchData(`/products/?title=${productInfo.productName}`)
    const {likedProducts} = useSelector(state => state.likeReducer)
    function addToLike(product){
        dispatch({product, type: "LIKE_PRODUCT"})
      }
      function removeFromLikedProducts(data){
        dispatch({id: data.id, type: 'REMOVE_FROM_LIKED'})
      }
    return (
        <Container>
           <div  className="search-results__wrapper">
                    {
                        data.map(searchItem =>

                            <div className='search-item' key={searchItem.id}>
                                <Link to={`/product/${searchItem.id}`}>
                                    <img width={300} src={searchItem.images?.at(0)} alt="" />
                                </Link>
                                <div key={searchItem.id} className='search-item__text'>
                                    <h2>{searchItem.title}</h2>
                                    <p>{searchItem.description}</p>
                                    <strong>${searchItem.price}</strong>
                                </div>
                                {likedProducts.find(p => p?.id === searchItem?.id) ? <BsFillSuitHeartFill onClick={() =>removeFromLikedProducts(searchItem)} style={{color: "red"}}/> : <FiHeart onClick={()=> addToLike(searchItem)}/> }
                            </div>

                        )
                    }
                </div>
        </Container>
    );
}

export default SearchResult;
