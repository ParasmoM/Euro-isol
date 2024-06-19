import React from 'react'
import { useLocation } from 'react-router-dom'
import { getImagePath } from '../../../utils/getImagePath.js';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb.jsx';
import useTitle from '../../../hooks/useTitle.js';

function ProductDetailView({ data, lang }) {
    const location = useLocation();
    const { categ, itemId } = location.state || {};
    const item = data[lang][categ].filter(item => item.id === itemId)[0];
    const imagePath = getImagePath(item["pathImage"]);

    useTitle("Euro-Isol", lang);

    return (
        <main className="product-detail">
            <div className="product-detail-container">

                <Breadcrumb lang={lang} >{item.name}</Breadcrumb>

                <div className="product-detail__main-content">

                    <div className="product-detail__images-section">
                        <div className="product-detail__main-image">

                            <img src={imagePath} alt="" />

                        </div>
                    </div>

                    <div className="product-detail__info-section">

                        <h1 className="product-detail__title">{item.datasheets.title}</h1>


                        {item.datasheets.description.map((paragraph, index) => (
                                <p className="product-detail__description" key={index}>{paragraph}</p>
                            ))
                        }


                        {item.datasheets.characteristic && (
                                <ul className="product-detail__features-list">
                                    {item.datasheets.characteristic.map((item, index) => (

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
                            {/* <span>{item.price}</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetailView