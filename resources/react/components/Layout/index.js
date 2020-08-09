import React from 'react';
import './styles.css';

import Footer from '../Footer';
import Title, { SubTitle } from '../Title';
import { LargeImage } from '../Image';

const Layout = ({ 
    className = '',
     title = '',
     subtitle = '',
     headerSrc = '', 
     footerSrc = '',
     children
}) => (
    <div className={`Layout ${className}`}>
        <Title color='#4d4d4d'>{title}</Title>
        <SubTitle color='#666666'>{subtitle}</SubTitle>

        <hr style={{ 
            width: '10%',
            margin: '5vh 0 10vh 0',
            border: 'none', 
            borderTop: 'solid 1.5px gray' 
        }} />

        <LargeImage height='50vh' width='80%' src={headerSrc} alt="@Franpax95" placeholder={false} />

        {children}

        <Footer src={footerSrc} />
    </div>
);

export default Layout;