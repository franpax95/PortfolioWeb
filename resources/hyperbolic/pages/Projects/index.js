import React from 'react';
import './Projects.css';

import { useLanguage } from '../../hooks/useLanguage';

import Footer from '../../components/Footer';
import Title, { SubTitle } from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { LargeImage } from '../../components/Image';


const Projects = (props) => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    const { Projects: txt } = texts;

    return (
        <div className="Projects">
            <Title color='#4d4d4d'>{txt.title}</Title>
            <SubTitle color='#666666'>{txt.subtitle}</SubTitle>
            
            <hr style={{ 
                width: '10%',
                margin: '5vh 0 10vh 0',
                border: 'none', 
                borderTop: 'solid 1.5px gray' 
            }} />

            <LargeImage height='40vh' width='80%' src='/img/projects/header.jpg' alt="" placeholder={false} />



        </div>
    );
}

export default Projects;