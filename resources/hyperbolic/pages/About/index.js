import React from 'react';
import './About.css';

import { useLanguage } from '../../hooks/useLanguage';

import Title, { SubTitle } from '../../components/Title';
import { LargeImage } from '../../components/Image';
import { IconCard } from '../../components/Card';

import { FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';


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

            <LargeImage height='50vh' width='80%' src='/img/about/header.jpg' alt="" />

            <div className="primary">
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
        </div>
    );
}

export default About;