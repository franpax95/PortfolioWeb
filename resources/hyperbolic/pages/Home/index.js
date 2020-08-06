import React from 'react';
import './Home.css';

import { useLanguage } from '../../hooks/useLanguage';

import Footer from '../../components/Footer';
import Section, { BackgroundFixedSection } from '../../components/Section';
import { CircleImage } from '../../components/Image';

import Title, { SubTitle } from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';


const Home = () => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    const { Home: txt } = texts;

    return (
        <div className="Home">
            <BackgroundFixedSection src='/img/hyperbolic/home_section_2_dark.jpg'>
                <Title color='white'>{txt.header.title}</Title>

                <hr style={{ 
                    width: '15%',
                    margin: '5vh 0',
                    border: 'none', 
                    borderTop: 'solid 1.5px whitesmoke' 
                }} />
               
                <SubTitle color='whitesmoke'>{txt.header.subtitle}</SubTitle>
            </BackgroundFixedSection>

            <Section>
                <div className="section-header">
                    <CircleImage src='/img/home/section1.jpg' alt='' />
                </div>
                <div className="section-content">
                    <Title color='#404040' textAlign='left'>{txt.section[0].title}</Title>
                    <SubTitle color='#4d4d4d' textAlign='left'>{txt.section[0].subtitle}</SubTitle>

                    <hr style={{ 
                        width: '10%',
                        margin: '30px 0',
                        border: 'none', 
                        borderTop: 'solid 1.5px gray' 
                    }} />

                    <Paragraph color='#666666'>{txt.section[0].paragraph}</Paragraph>
                    <br /><br />
                    <Button to='/about'>{txt.section[0].link}</Button>
                </div>
            </Section>

            <hr style={{ 
                width: '70%',
                margin: '30px 0',
                border: 'none', 
                borderTop: 'solid 1px lightgray' 
            }} />

            <Section reverse={true}>
                <div className="section-header">
                    <CircleImage src='/img/home/section2.jpg' alt='' />
                </div>
                <div className="section-content">
                    <Title color='#404040' textAlign='left'>{txt.section[1].title}</Title>
                    <SubTitle color='#4d4d4d' textAlign='left'>{txt.section[1].subtitle}</SubTitle>

                    <hr style={{ 
                        width: '10%',
                        margin: '30px 0',
                        border: 'none', 
                        borderTop: 'solid 1.5px gray' 
                    }} />

                    <Paragraph color='#666666'>{txt.section[1].paragraph}</Paragraph>
                    <br /><br />
                    <Button to='/projects'>{txt.section[1].link}</Button>
                </div>
            </Section>

            <hr style={{ 
                width: '70%',
                margin: '30px 0',
                border: 'none', 
                borderTop: 'solid 1px lightgray' 
            }} />

            <Section>
                <div className="section-header">
                    <CircleImage src='/img/home/section3.jpg' alt='' />
                </div>
                <div className="section-content">
                    <Title color='#404040' textAlign='left'>{txt.section[2].title}</Title>
                    <SubTitle color='#4d4d4d' textAlign='left'>{txt.section[2].subtitle}</SubTitle>

                    <hr style={{ 
                        width: '10%',
                        margin: '30px 0',
                        border: 'none', 
                        borderTop: 'solid 1.5px gray' 
                    }} />

                    <Paragraph color='#666666'>{txt.section[2].paragraph}</Paragraph>
                    <br /><br />
                    <Button to='/contact'>{txt.section[2].link}</Button>
                </div>
            </Section>

            <Footer src='/img/hyperbolic/home_section_2_dark.jpg' />
        </div>
    );
}

export default Home;