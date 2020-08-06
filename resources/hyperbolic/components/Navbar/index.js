import React, { useState, useRef } from 'react';
import './styles.css';

import { useSpring, animated } from 'react-spring';
import onClickOutside from "react-onclickoutside";
import { useLanguage } from '../../hooks/useLanguage';

import { NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
    /** lang hook */
    const [texts, setLang] = useLanguage();

    /** ref for Navbar (necessary to handleClickoutside) */
    const ref = useRef();

    /** sidebar transition effect */
    const [display, setDisplay] = useState(false);
    const spring = useSpring({ right: display ? '0' : '-300px' });


    Navbar.handleClickOutside = (e) => { 
        if(!ref.current.contains(e.target)) setDisplay(false);
    }

    const onLangClick = (lang) => {
        setLang(lang);
        setDisplay(false);
    }


    const { Navbar: txt } = texts;

    return (<>
        <button className="navbar-open-btn" onClick={() => setDisplay(true)}>
            <GoThreeBars />
        </button>

        <animated.div className="Navbar" ref={ref} style={spring}>
            <div className="container">
                <button className="navbar-close-btn" onClick={() => setDisplay(false)}>
                    <MdClose />
                </button>

                <NavLink exact to="/" activeClassName="active" onClick={() => setDisplay(false)}>
                    {txt.home}
                </NavLink>

                <NavLink to="/about" activeClassName="active" onClick={() => setDisplay(false)}>
                    {txt.about}
                </NavLink>

                <NavLink to="/projects" activeClassName="active" onClick={() => setDisplay(false)}>
                    {txt.projects}
                </NavLink>
                
                <div className="lang">
                    <button onClick={() => onLangClick('esp')}>
                        <img src='/img/spainflag.png' alt='' />
                        {txt.spanish}
                    </button>

                    <button onClick={() => onLangClick('eng')}>
                        <img src='/img/englandflag.png' alt='' />
                        {txt.english}
                    </button>
                </div>
            </div>
        </animated.div>
    </>);
}

const clickOutsideConfig = { handleClickOutside: () => Navbar.handleClickOutside };
export default onClickOutside(Navbar, clickOutsideConfig);