import React from 'react';

import {ProductProps} from "./Product-interface";

import './product.css';


export const Product: React.FC<ProductProps> = ({ name, url }) => {
    return (
        <div className="product-card-container">
            <div style={{ backgroundImage: `url(${url})` }} className="product-image" />
            <div className="product-details">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Product;