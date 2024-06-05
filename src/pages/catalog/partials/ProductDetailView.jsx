import React from 'react'
import { useLocation } from 'react-router-dom'
import { getImagePath } from '../../../utils/getImagePath.js';

function ProductDetailView({ data, lang }) {
    const location = useLocation();
    const { categ, itemId } = location.state || {};
    const item = data[lang][categ].filter(item => item.id === itemId)[0];
    const imagePath = getImagePath(item["image"]);
    console.log(item, item.image);

    return (
        <main className="product-detail">
            <div className="product-detail-container">
                <div className="product-detail__main-content">

                    <div className="product-detail__images-section">
                        <div className="product-detail__main-image">

                            <img src={imagePath} alt="" />

                        </div>
                    </div>

                    <div className="product-detail__info-section">

                        <h1 className="product-detail__title">{item.details.title}</h1>


                        {item.details.text.map((paragraph, index) => (
                                <p className="product-detail__description" key={index}>{paragraph}</p>
                            ))
                        }


                        {item.details.characteristic && (
                                <ul className="product-detail__features-list">
                                    {item.details.characteristic.map((item, index) => (

                                        <li
                                            className="product-detail__feature-item"
                                            key={index}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )
                        }

                        <div className='product-detail__price'>
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetailView