import React from 'react'
import ProductCard from './partials/ProductCard'
import Checkbox from '../../components/checkbox/Checkbox';
import useCategorySelection from '../../hooks/useCategorySelection';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import useTitle from '../../hooks/useTitle';
import useWindowSize from '../../hooks/useWindowSize';

function PageCatalog({ data, lang }) {
    const lists = data[lang];
    const [currentSelection, handleCheckboxChange] = useCategorySelection();
    const allItemsCount = Object.values(lists).reduce((total, list) => total + list.length, 0);
    const { width } = useWindowSize();
    const breakpoint = 1024;

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
    const translations = {
        fr: 'Catégories',
        en: 'Categories',
        nl: 'Categorieën',
    };

    useTitle("Euro-Isol", lang);

    return (
        <main className='page-catalog'>
            <div className="catalog-container">
                <Breadcrumb lang={lang} />
                <div className='products-dashboard'>

                    {width < breakpoint && <h1 className='heading'>Nos Produits</h1>}

                    <aside className="product-menu">
                        <h2>{translations[lang]}</h2>

                        <ul>
                            <li key="all">
                                <div className="checkbox-wrapper-42">
                                    <input
                                        id="cbx-all"
                                        type="checkbox"
                                        value={"all"}
                                        checked={currentSelection === 'all'}
                                        onChange={() => handleCheckboxChange('all')}
                                    />
                                    <label className="cbx" htmlFor="cbx-all"></label>
                                    <label className="lbl" htmlFor="cbx-all">{showText(lang)}</label>
                                </div>
                                <span>{allItemsCount}</span>
                            </li>

                            {Object.entries(lists).map(([list, index]) => (
                                <li key={list}>
                                    {<Checkbox
                                        id={`cbx-${list}`}
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

                        {width >= breakpoint && <h1 className='heading'>Nos Produits</h1>}

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