import React from 'react';

import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import './Footer.css';

const Footer = () => {

    return (
        <div className="Footer">
            <div className="elem">
                <MdMail />fcojnavarrowork@gmail.com
            </div>
            <a className="elem" target="_blank" href="https://github.com/franpax95">
                <FaGithub />
                github.com/franpax95
            </a>
            <div className="elem">
                <FaWhatsapp />+34 697 883 410
            </div>
            <a className="elem" target="_blank" href="https://www.linkedin.com/in/francisco-javier-navarro-garcía-997ba0191">
                <FaLinkedin />
                Linkedin
            </a>
        </div>
    );
}

export default Footer;