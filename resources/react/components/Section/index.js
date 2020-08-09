import React from 'react';
import './styles.css';


export const BackgroundFixedSection = ({
    src = '',
    children
}) => <div className="BackgroundFixedSection" style={{
    backgroundImage: `url(${src})`
}}>{children}</div>;


const Section = ({
    reverse = false,
    backgroundColor = 'white',
    children
}) => <div className={`Section${(reverse) ? ' reverse' : ''}`} style={{
    backgroundColor
}}>{children}</div>;

export default Section;