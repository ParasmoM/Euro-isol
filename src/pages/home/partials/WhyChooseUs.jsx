import React, { useState } from 'react'
import { MaterialSymbolsArrowLeftAltRounded, MaterialSymbolsArrowRightAltRounded } from '../../../assets/icons/icons'
import globalData from "../../../data/infoData.json";

function WhyChooseUs({ data, lang }) {
    const [counter, setCounter] = useState(1);
    const article = data[lang][counter - 1];
    const title = article["title"];
    const content = article["content"];
    
    const increment = () => {
        setCounter((prevCounter) => (prevCounter < 5 ? prevCounter + 1 : prevCounter));
    };

    const decrement = () => {
        setCounter((prevCounter) => (prevCounter > 1 ? prevCounter - 1 : prevCounter));
    };
    
    return <>
        <div className='why-choose-us-container'>

            <div className='why-choose-us-content'>
                <div className='why-choose-us-image'>
                    <img src="/public/image1.png" alt="Euro-Sol Quality Materials" />
                </div>

                <div className='why-choose-us-articles'>
                    <article className='benefit benefit-one'>
                        <h2 className='benefit-title'>{title}</h2>
                        <p className='benefit-description'>
                            {content}
                        </p>
                    </article>
                </div>
            </div>

            <div className='why-choose-us-pagination'>
                <button onClick={decrement} className='pagination-button pagination-button-prev' style={{ opacity: counter == 1 ? '0' : '1' }}>
                    <MaterialSymbolsArrowLeftAltRounded />
                    <span className='button-label'>{counter === 1 ? data[lang][0]["title"] : data[lang][counter - 2]["title"]}</span>
                </button>

                <div className='pagination-status'>
                    <span className='current-page'>{counter}</span>
                    <span>/</span>
                    <span className='total-pages'>5</span>
                </div>

                <button onClick={increment} className='pagination-button pagination-button-next' style={{ opacity: counter == 5 ? '0' : '1' }}>
                    <span className='button-label'>{counter === 5 ? data[lang][4]["title"] : data[lang][counter]["title"]}</span>
                    <MaterialSymbolsArrowRightAltRounded />
                </button>
            </div>

        </div>
    </>
}


export default WhyChooseUs