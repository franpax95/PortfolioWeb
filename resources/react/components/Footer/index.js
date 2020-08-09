import React from 'react';
import './styles.css';

import { useLanguage } from '../../hooks/useLanguage';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = ({ src = '' }) => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    const { Footer: txt } = texts;

    return (
        <div className="Footer" style={{ backgroundImage: `url(${src})` }}>
            <div className="icons">
                <a href="https://github.com/franpax95" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/francisco-javier-navarro-garcía-997ba0191" target="_blank"><FaLinkedin /></a>
                <a href="https://www.instagram.com/franpax95/" target="_blank"><FaInstagram /></a>
            </div>
            <div className="info">
                <p>{txt.email}</p>
                <p>{txt.phone}</p>
            </div>
        </div>
    );
}

export default Footer;