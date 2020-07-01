import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useWindowHeight } from '../../hooks/useWindowHeight';
import { useInnerWidth } from '../../hooks/useInnerWidth';
import { useLanguage } from '../../hooks/useLanguage';

import { MdLanguage, MdClose } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { GoThreeBars } from "react-icons/go";

import './Navbar.css';

const Navbar = () => {
    const WIDTH_LIMIT = 700;
    const HEIGHT_LIMIT = 380;

    const height = useWindowHeight();
    const width = useInnerWidth();
    const { pathname } = useLocation();
    const [texts, setLang] = useLanguage();
    const [dropdownActive, setDropdownActive] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    

    const isHomeLinkActive = () => {
        if((pathname === "/") || (pathname === "/home"))
            return true;
        else
            return false;
    }

    const changeLang = (lang) => {
        setLang(lang);
        setDropdownActive(false);
        setIsSidebarOpen(false);
    }

    let class_name = (width > WIDTH_LIMIT) 
        ? `Navbar ${(height > HEIGHT_LIMIT) ? 'black' : 'white'}` 
        : `Sidebar ${(isSidebarOpen) ? 'open' : 'closed'}`;
    
    return (<>
        {
            (width < WIDTH_LIMIT) &&
            <button className="SidebarButton" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {(isSidebarOpen) ? <MdClose /> : <GoThreeBars />}
            </button>
        }
        <div className={class_name}>
            <NavLink 
                to="/home" 
                activeClassName="active" 
                isActive={() => isHomeLinkActive()}
                onClick={() => setIsSidebarOpen(false)}
            >
                {texts.Navbar.home}
            </NavLink>

            <NavLink to="/about" activeClassName="active" onClick={() => setIsSidebarOpen(false)}>
                {texts.Navbar.about}
            </NavLink>

            <NavLink to="/projects" activeClassName="active" onClick={() => setIsSidebarOpen(false)}>
                {texts.Navbar.projects}
            </NavLink>

            <div className="language-box">
                {
                    (width > WIDTH_LIMIT) && 
                    <button onClick={() => setDropdownActive(!dropdownActive)}>
                        <MdLanguage /> 
                        {(dropdownActive) ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                    </button>
                }
                <button onClick={() => changeLang('esp')} className={(dropdownActive) ? 'visible' : 'none'}>
                    <img src="/img/spainflag.png" alt="Español" />
                    Español
                </button>
                <button onClick={() => changeLang('eng')} className={(dropdownActive) ? 'visible' : 'none'}>
                    <img src="/img/englandflag.png" alt="Inglés" />
                    English
                </button>
            </div>
        </div>
    </>);
}

export default Navbar;