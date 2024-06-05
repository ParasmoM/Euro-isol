import React from 'react';
import usePageTrail from '../../hooks/usePageTrail';
import { Link } from 'react-router-dom';

export default function PageAbout({ data, lang }) {
    const trail = usePageTrail();
    const path = trail.slice(0, 1).join('/');

    return (
        <main className='page-about'>
            <div className="page-about-container">
                <div className="queue-container" >
                    <Link to={'/home'}>Home</Link>
                    <span>{'>'}</span>
                    <Link to={`/${path}`}>{path}</Link>
                </div>

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
