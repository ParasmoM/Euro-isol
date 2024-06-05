import React from 'react'
import { Loop } from '../../assets/icons/icons'
import ProductCard from './partials/ProductCard'
import usePageTrail from '../../hooks/usePageTrail';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/checkbox/Checkbox';
import useCategorySelection from '../../hooks/useCategorySelection';

function PageCatalog({ data, lang }) {
    const lists = data[lang];
    const [currentSelection, handleCheckboxChange] = useCategorySelection();
    const allItemsCount = Object.values(lists).reduce((total, list) => total + list.length, 0);

    const showText = function (lang) {
        switch (lang) {
            case 'nl':
                return 'Alles tonen'
            case 'en':
                return 'Show all'
            default:
                return 'Afficher tout'
        }
    }

    return (
        <main className='page-catalog'>
            <div className="catalog-container">

                <div className='products-dashboard'>

                    <aside className="product-menu">
                        <h2>Categories</h2>

                        <ul>
                            <li key="all">
                                <label>
                                    <input
                                        type="checkbox"
                                        value={"all"}
                                        checked={currentSelection === 'all'}
                                        onChange={() => handleCheckboxChange('all')}
                                    />
                                    {showText(lang)}
                                </label>
                                <span>{allItemsCount}</span>
                            </li>
                            {Object.entries(lists).map(([list, index]) => (
                                <li key={list}>
                                    {<Checkbox
                                        category={list}
                                        handleCheckboxChange={handleCheckboxChange}
                                        isChecked={currentSelection === list}
                                        lang={lang}
                                    />}
                                    <span>{index.length}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <div className="product-grid">

                        <h1>Nos Produits</h1>

                        <div>
                            {currentSelection === 'all'
                                ? Object.entries(lists).flatMap(([key, list]) => (
                                    list.map((product) => (
                                        <ProductCard product={product} key={product.id} categ={key} />
                                    ))
                                ))
                                : lists[currentSelection].map((product) => (
                                    <ProductCard product={product} key={product.id} categ={currentSelection} />
                                ))
                            }
                        </div>

                    </div>

                </div>

            </div>
        </main>
    )
}

export default PageCatalog