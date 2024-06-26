import React from 'react';
import usePageTrail from '../../hooks/usePageTrail';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import useTitle from '../../hooks/useTitle';

export default function PageAbout({ data, lang }) {
    const trail = usePageTrail();
    const path = trail.slice(0, 1).join('/');
    useTitle("Euro-Isol", lang);

    return (
        <main className='page-about'>
            <div className="page-about-container">
                <Breadcrumb lang={lang} />

                <h1>{data[lang]["mainTitle"]}</h1>

                {data[lang]["sections"].map((article, index) => (
                    <div className="about-section" key={index}>
                        <h2 className="section-title">{article.subTitle}</h2>

                        <p className="section-description">{article.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
