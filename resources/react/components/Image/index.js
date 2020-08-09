import React from 'react';
import './styles.css';

import Img from 'react-cool-img';
import spinner from './spinner.svg';

export const LargeImage = ({
    src = '',
    alt = '',
    width = '100%',
    height = '30vh',
    placeholder = true
}) => <div className="LargeImage" style={{ width, height }}>
    <Img src={src} alt={alt} placeholder={placeholder && spinner} />
</div>;     

export const CircleImage = ({
    src = '',
    alt = '',
}) => <div className="Circle Image" style={{}}>
    <Img src={src} alt={alt} placeholder={spinner} />
</div>;

const Image = ({
    src = '',
    alt = ''
}) => <div className="Image" style={{}}>
    <Img src={src} alt={alt} placeholder={spinner} />
</div>;

export default Image;