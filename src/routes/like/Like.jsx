import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Container from '../../utils/Container';
import "./Like.css"

const Like = () => {
    const {likedProducts} = useSelector(state => state.likeReducer)
   return (
    <div>
        <Container>
        <div className="like-wrapper">
            {
                likedProducts.map(like => 
                    <div className='like-item' key={like.id}>
                        <Link to={`/product/${like.id}`}>
                            <img width={230} src={like.images?.at(0)} alt="" />
                        </Link>
                        <div className='like-text'>
                            <h2>{like.title}</h2>
                            <p>{like.description}</p>
                            <strong>${like.price}</strong>
                        </div>
                    </div>    
                )
            }
        </div>
        </Container>
    </div>
  )
}


export default Like