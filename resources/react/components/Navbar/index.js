import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import { MdLanguage } from "react-icons/md";

import { Navbar as EspNavbarTexts } from '../../lang/esp';
import { Navbar as EngNavbarTexts } from '../../lang/eng';

import './Navbar.css';

const Navbar = () => {
    const [state, setState] = useContext(Context);
    const [navbarTexts, setNavbarTexts] = useState(
        (state.lang === 'esp') ? EspNavbarTexts : EngNavbarTexts
    );
    const [height, setHeight] = useState(window.scrollY);
    const updateHeight = () => { setHeight(window.scrollY); }

    /** "change navbar color when scrollY" effect */
    useEffect(() => {
        window.addEventListener("scroll", updateHeight);
        return(() => window.removeEventListener("scroll", updateHeight));
    });

    /** "change lang" effect */
    useEffect(() => {
        setNavbarTexts(
            (state.lang === 'esp') ? EspNavbarTexts : EngNavbarTexts
        );
    }, [state.lang]);

    /** toggle lang when onClick event */
    const onLangBtnClick = () => {
        const lang = (state.lang === 'esp') ? 'eng' : 'esp';
        setState(state => ({ ...state, lang }));
    }



    const { pathname } = useLocation();
    const isActive = () => {
        if(pathname === "/home")    return true;
        else if(pathname === "/")   return true;
        else                        return false;
    }
    return (
        <div className={`Navbar ${(height > 380) ? 'black' : 'white'}`}>
            <NavLink to="/home" activeClassName="active" isActive={() => isActive()}>
                {navbarTexts.home}
            </NavLink>
            <NavLink to="/develop" activeClassName="active">
                {navbarTexts.develop}
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
                {navbarTexts.projects}
            </NavLink>
            <button onClick={() => onLangBtnClick()}>
                <MdLanguage /> {state.lang}
            </button>
        </div>
    );
}

export default Navbar;