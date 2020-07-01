import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

import './About.css';

const About = () => {
    const [texts, setLang] = useLanguage();

    return (
        <div className="About">
            <h1>{texts.About.title}</h1>
            <h3>{texts.About.subtitle}</h3>
            <h5>{texts.About.lasttitle}</h5>

            <div className="section">
                <div className="wrapper">
                    <img src="/img/about1.jpg" alt="Francisco Javier Navarro García" />
                </div>
                <div className="article">
                    {texts.About.articles[0]}
                </div>
            </div>

            <div className="section">
                <div className="article">
                    {texts.About.articles[1]}
                </div>
                <div className="wrapper">
                    <img src="/img/about3.jpg" alt="Francisco Javier Navarro García" />
                </div>
                
            </div>

            <div className="section">
                <div className="wrapper">
                    <img src="/img/about2.jpg" alt="Francisco Javier Navarro García" />
                </div>
                <div className="article">
                    {texts.About.articles[2]}
                </div>
            </div>

            <div className="table">
                <h4>{texts.About.techs.title}</h4>
                <ul>{texts.About.techs.list.map((li, key) => (
                    <li key={key}>{li}</li>
                ))}</ul>

                <h4>{texts.About.otherTechs.title}</h4>
                <ul>{texts.About.otherTechs.list.map((li, key) => (
                    <li key={key}>{li}</li>
                ))}</ul>
            </div>
        </div>
    );
}

export default About;