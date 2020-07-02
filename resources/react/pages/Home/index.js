import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { nl2br } from '../../util';

import EmailModal from '../../components/EmailModal';

import './Home.css';

const Home = () => {
    const [texts, setLang] = useLanguage();
    const [isModalOn, setIsModalOn] = useState(false);

    return (<>
        {isModalOn && <EmailModal  onClickOutside={() => setIsModalOn(false)} />}
        <div className="Home">
            <h1>{texts.Home.title}</h1>
            <h3>{nl2br(texts.Home.subtitle)}</h3>
            <button className="emailbtn" onClick={() => setIsModalOn(true)}>{texts.Home.emailbtn}</button>

            <div className="section">
                <div className="wrapper">
                    <img src="/img/about2.jpg" alt="Francisco Javier Navarro García" />
                </div>
                <div className="article">
                    {texts.Home.article}
                </div>
            </div>
        </div>
    </>);
}

export default Home;