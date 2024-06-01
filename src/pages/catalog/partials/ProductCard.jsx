import React from 'react'
import { getImagePath } from '../../../utils/getImagePath.js';
import { Link } from 'react-router-dom';

function ProductCard({ product, categ, article }) {
    const imagePath = getImagePath(product.image);
    
    return (
        <Link 
            to="/detail" 
            state={{ categ: categ, article: article }}
            className="product-card"
        >
            <div className="product-card-image">
                <img src={imagePath} alt="" />
            </div>

            <div className="product-card-details">
                <p className="product-card-brand">{product.brand}</p>
                <p className="product-card-title">{product.title}</p>
                <div className="product-card-info">
                    <span className="product-card-category">{product.category}</span>
                    <span className="product-card-price">{product.price} €</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard