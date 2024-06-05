import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

function pageLegal({ data, lang }) {
    const titles = {
        fr: "Mentions Légales",
        nl: "Wettelijke Kennisgeving",
        en: "Legal Notice"
    };

    const title = titles[lang];
    const content = data[lang];

    return (
        <main className="page-legal">
            <div className="container">
                <Breadcrumb lang={lang} />
                
                <h1>{title}</h1>

                {content.map((value, index) => (
                    <div key={index}>
                        <h2>{value["title"]}</h2>
                        {value["text"].map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                ))}

            </div>
        </main>

    )
}

export default pageLegal