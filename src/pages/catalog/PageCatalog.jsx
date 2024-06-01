import React from 'react'
import { Loop } from '../../assets/icons/icons'
import ProductCard from './partials/ProductCard'
import products from "../../data/products.json";
import usePageTrail from '../../hooks/usePageTrail';
import { Link } from 'react-router-dom';

function PageCatalog() {
    const data = products;
    const trail = usePageTrail();
    const path = trail.slice(0, 1).join('/');

    return (
        <main className='page-catalog'>
            <div className="queue-container" >
                <Link to={'/home'}>Home</Link>
                <span>{'>'}</span>
                <Link to={`/${path}`}>{path}</Link>
            </div>

            <div>
                <h1>Nos Produits</h1>
            </div>

            <div className="product-grid">
                {Object.entries(data).map(([category, articles]) => (
                    Object.entries(articles).map(([key, product]) => (
                        <ProductCard key={key} product={product} categ={category} article={key} />
                    ))
                ))}
            </div>
        </main>
    )
}

export default PageCatalog