import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product
    const handleAddToCart=props.handleAddToCart;

  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='Product-info'>
                <h6 className='Product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Menufecturer: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};

export default Product;