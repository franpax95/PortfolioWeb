import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useInnerWidth } from '../../hooks/useInnerWidth';
import SlickCarouselSlider from '../../components/SlickCarouselSlider';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './About.css';

const About = () => {
    const [texts, setLang] = useLanguage();
    const width = useInnerWidth();

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

            <h2>Diplomas de Platzi.com</h2>
            <div className="section">
                <SlickCarouselSlider
                    images={[
                        '/img/platzi/diploma-asincronismo-js.jpg',
                        '/img/platzi/diploma-ecmascript-6.jpg',
                        '/img/platzi/diploma-react.jpg',
                        '/img/platzi/diploma-react-avanzado.jpg',
                        '/img/platzi/diploma-react-router.jpg',
                        '/img/platzi/diploma-redux.jpg',
                        '/img/platzi/diploma-webpack.jpg'
                    ]}
                    width = {(width > 750) ? '650px' : '250px' }
                    height = {(width > 750) ? '500px' : '200px' }
                />
            </div>
        </div>
    );
}

export default About;