import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';

import './Develop.css';

import { Develop as EspDevelopTexts } from '../../lang/esp';
import { Develop as EngDevelopTexts } from '../../lang/eng';

const ImgWrapper = ({ src }) => (
    <div className="image"><img src={src} alt="About @franpax95" /></div>
);

const Develop = () => {
    const [state, setState] = useContext(Context);
    const [developTexts, setDevelopTexts] = useState(
        (state.lang === 'esp') ? EspDevelopTexts : EngDevelopTexts
    );
    useEffect(() => {
        setDevelopTexts(
            (state.lang === 'esp') ? EspDevelopTexts : EngDevelopTexts
        );
    }, [state.lang]);

    return (
        <div className="Develop">
            <h1 className="title">
                {developTexts.title}
            </h1>
            <h3 className="subtitle">{developTexts.subtitle}</h3>

            <div className="description">
                {developTexts.descriptions[0]}
            </div>
            <ImgWrapper src="/img/about1.jpg" />

            <ImgWrapper src="/img/about2.jpg" />
            <div className="description">
                {developTexts.descriptions[1]}
            </div>
            
            <div className="description">
                {developTexts.descriptions[2]}
            </div>
            <ImgWrapper src="/img/about7.png" />

            <ImgWrapper src="/img/about8.jpg" />
            <div className="description">
                {developTexts.descriptions[3]}
            </div>
        </div>
    );
}

export default Develop;