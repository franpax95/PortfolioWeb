import React from 'react';
import './About.css';

import { useLanguage } from '../../hooks/useLanguage';

import Layout from '../../components/Layout';
import Title, { SubTitle } from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { IconCard } from '../../components/Card';
import SlickCarouselSlider from '../../components/SlickCarouselSlider';


const HorizontalRule = () => <hr style={{ width: '90%', margin: '10vh 0', border: 'none', borderTop: 'solid 1px lightgray' }}/>;


const About = () => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    const { About: txt } = texts;

    const images = [
        '/img/platzi/diploma-asincronismo-js.jpg',
        '/img/platzi/diploma-ecmascript-6.jpg',
        '/img/platzi/diploma-react.jpg',
        '/img/platzi/diploma-react-avanzado.jpg',
        '/img/platzi/diploma-react-router.jpg',
        '/img/platzi/diploma-redux.jpg',
        '/img/platzi/diploma-webpack.jpg'
    ];

    return (
        <Layout 
            className = "About"
            title = {txt.title}
            subtitle = {txt.subtitle}
            headerSrc = '/img/about/header.jpg'
            footerSrc = '/img/about/footer.jpg'
        >
            <div className="section">
                <Title color='#4d4d4d'>{txt.section[0].title}</Title>
                <SubTitle color='#666666'>{txt.section[0].subtitle}</SubTitle>

                <div className="content icon-list">
                    {txt.section[0].content.map((t, key) => <IconCard key={key} {...t} />)}
                </div>
            </div>

            <HorizontalRule />

            <div className="section">
                <Title color='#4d4d4d'>{txt.section[1].title}</Title>
                <SubTitle color='#666666'>{txt.section[1].subtitle}</SubTitle>
                
                <div className="content">
                    <SlickCarouselSlider images={images} />
                </div>
            </div>

            <HorizontalRule />

            <div className="section">
                <Title color='#4d4d4d'>{txt.section[2].title}</Title>

                <div className="content">
                    <ul>{txt.section[2].content.map((li, key) => <li key={key}>{li}</li>)}</ul>
                </div>
            </div>

            <HorizontalRule />

            <div className="section">
                <Title color='#4d4d4d'>{txt.section[3].title}</Title>
                <SubTitle color='#666666'>{txt.section[3].subtitle}</SubTitle>

                <div className="content">
                    <Paragraph color='#666666'>{txt.section[3].content}</Paragraph>
                </div>
            </div>
        </Layout>
    );
}

export default About;