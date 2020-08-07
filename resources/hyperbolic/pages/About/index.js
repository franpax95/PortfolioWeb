import React from 'react';
import './About.css';

import { useLanguage } from '../../hooks/useLanguage';

import Footer from '../../components/Footer';
import Title, { SubTitle } from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { LargeImage } from '../../components/Image';
import { IconCard } from '../../components/Card';
import SlickCarouselSlider from '../../components/SlickCarouselSlider';


const About = (props) => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    const { About: txt } = texts;

    return (
        <div className="About">
            <Title color='#4d4d4d'>{txt.title}</Title>
            <SubTitle color='#666666'>{txt.subtitle}</SubTitle>

            <hr style={{ 
                width: '10%',
                margin: '5vh 0 10vh 0',
                border: 'none', 
                borderTop: 'solid 1.5px gray' 
            }} />

            <LargeImage height='50vh' width='80%' src='/img/about/header.jpg' alt="" placeholder={false} />

            <div className="section primary">
                <Title color='#4d4d4d'>{txt.primary.title}</Title>
                <SubTitle color='#666666'>{txt.primary.subtitle}</SubTitle>
                <div className="content">
                    {txt.primary.tech.map((t, key) => (
                        <IconCard key={key} {...t} />
                    ))}
                </div>
            </div>

            <hr style={{ 
                width: '100%',
                margin: '5vh 0 10vh 0',
                border: 'none', 
                borderTop: 'solid 1px lightgray' 
            }} />

            <div className="section secondary">
                <Title color='#4d4d4d'>{txt.secondary.title}</Title>
                <SubTitle color='#666666'>{txt.secondary.subtitle}</SubTitle>
                <br /><br />
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
                />
            </div>

            <hr style={{ 
                width: '100%',
                margin: '5vh 0 10vh 0',
                border: 'none', 
                borderTop: 'solid 1px lightgray' 
            }} />

            <div className="section terciary">
                <Title color='#4d4d4d'>{txt.terciary.title}</Title>
                <ul>
                    {txt.terciary.list.map((li, key) => (
                        <li key={key}>{li}</li>
                    ))}
                </ul>
            </div>

            <hr style={{ 
                width: '100%',
                margin: '5vh 0 10vh 0',
                border: 'none', 
                borderTop: 'solid 1px lightgray' 
            }} />

            <div className="section quaternary">
                <Title color='#4d4d4d'>{txt.quaternary.title}</Title>
                <SubTitle color='#666666'>{txt.quaternary.subtitle}</SubTitle>
                <br /><br />
                <Paragraph color='#666666'>{txt.quaternary.description}</Paragraph>
            </div>

            <Footer src='/img/hyperbolic/home_section_1_dark.jpg' />
        </div>
    );
}

export default About;