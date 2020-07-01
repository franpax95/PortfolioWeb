import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useWindowHeight } from '../../hooks/useWindowHeight';
import { useInnerWidth } from '../../hooks/useInnerWidth';
import { useLanguage } from '../../hooks/useLanguage';

import { MdLanguage } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import './Navbar.css';

const Navbar = () => {
    const height = useWindowHeight();
    const width = useInnerWidth();

    const { pathname } = useLocation();

    const [texts, setLang] = useLanguage();

    const [dropdownActive, setDropdownActive] = useState(false);
    

    const isHomeLinkActive = () => {
        if((pathname === "/") || (pathname === "/home"))
            return true;
        else
            return false;
    }

    const changeLang = (lang) => {
        setLang(lang);
        setDropdownActive(!dropdownActive);
    }

    let class_name = (width > 600) ? `Navbar ${(height > 380) ? 'black' : 'white'}` : '';

    let navClassName = (width > 600)
        ? `Navbar ${(height > 380) ? 'black' : 'white'}`
        : ''
    
    return (
        <div className={class_name}>
            <NavLink to="/home" activeClassName="active" isActive={() => isHomeLinkActive()}>
                {texts.Navbar.home}
            </NavLink>

            <NavLink to="/develop" activeClassName="active">
                {texts.Navbar.develop}
            </NavLink>

            <NavLink to="/projects" activeClassName="active">
                {texts.Navbar.projects}
            </NavLink>

            <div className="language-box">
                <button onClick={() => setDropdownActive(!dropdownActive)}>
                    <MdLanguage /> {(dropdownActive) ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </button>
                <button onClick={() => changeLang('esp')} className={(dropdownActive) ? 'visible' : 'none'}>
                    Español
                </button>
                <button onClick={() => changeLang('eng')} className={(dropdownActive) ? 'visible' : 'none'}>
                    English
                </button>
            </div>
            
        </div>
    );
}

export default Navbar;