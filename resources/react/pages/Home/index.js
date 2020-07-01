import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { nl2br } from '../../util';

import './Home.css';

const Home = () => {
    const [texts, setLang] = useLanguage();

    return (
        <div className="Home">
            <h1>{texts.Home.title}</h1>
            <h3>{nl2br(texts.Home.subtitle)}</h3>
            <button className="emailbtn" onClick={() => alert('Disabled at the moment')}>{texts.Home.emailbtn}</button>

            <div className="section">
                <div className="wrapper">
                    <img src="/img/about2.jpg" alt="Francisco Javier Navarro García" />
                </div>
                <div className="article">
                    {texts.Home.article}
                </div>
            </div>
        </div>
    );
}

export default Home;