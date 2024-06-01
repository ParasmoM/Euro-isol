import React from 'react'
import { useLocation } from 'react-router-dom'
import products from "../../../data/products.json";
import { getImagePath } from '../../../utils/getImagePath.js';

function ProductDetailView() {
    const location = useLocation();
    const { categ, article } = location.state || {};
    const data = products[categ][article];
    const imagePath = getImagePath(data.details.gallery[0]);

    const galleryPath = data.details.gallery.map(item => getImagePath(item));
    console.log(galleryPath);

    return (
        <main className="product-detail">
            <div className="product-detail__queue-container">

            </div>

            <div className="product-detail__main-content">
                <div className="product-detail__images-section">
                    <div className="product-detail__main-image">
                        <img src={imagePath} alt="" />
                    </div>

                    {/* <div className="product-detail__thumbnail-gallery">
                        {galleryPath.map((item, index) => (
                            item !== imagePath && (
                                <div className="product-detail__thumbnail-item" key={index}>
                                    <img src={item} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            )
                        ))}
                    </div> */}
                </div>

                <div className="product-detail__info-section">
                    <h1 className="product-detail__title">{data.details.title}</h1>

                    <p className="product-detail__description">
                        {data.details.text}
                    </p>

                    {
                        data.details.characteristic && (
                            <ul className="product-detail__features-list">
                                {data.details.characteristic.map((item, index) => (
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
                </div>
            </div>
        </main>
    )
}

export default ProductDetailView