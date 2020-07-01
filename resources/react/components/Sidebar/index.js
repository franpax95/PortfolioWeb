import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../../Context';

import { Navbar as EspNavbarTexts } from '../../lang/esp';
import { Navbar as EngNavbarTexts } from '../../lang/eng';

import { GoThreeBars } from "react-icons/go";

import './Sidebar.css';

const Sidebar = () => {
    const [state, setState] = useContext(Context);
    const [navbarTexts, setNavbarTexts] = useState(
        (state.lang === 'esp') ? EspNavbarTexts : EngNavbarTexts
    );

    /** "change lang" effect */
    useEffect(() => {
        setNavbarTexts(
            (state.lang === 'esp') ? EspNavbarTexts : EngNavbarTexts
        );
    }, [state.lang]);

    /** changeLang event */
    const changeLang = (lang) => {
        setState(state => ({ ...state, lang }));
    }

    const { pathname } = useLocation();
    const isActive = () => {
        if(pathname === "/home")    return true;
        else if(pathname === "/")   return true;
        else                        return false;
    }
    return (<>
        <div className="Sidebar">
            <NavLink to="/home" activeClassName="active" isActive={() => isActive()}>
                {navbarTexts.home}
            </NavLink>

            <NavLink to="/develop" activeClassName="active">
                {navbarTexts.develop}
            </NavLink>

            <NavLink to="/projects" activeClassName="active">
                {navbarTexts.projects}
            </NavLink>

            <div className="language-box">
                <button onClick={() => changeLang('esp')} className={(dropdownActive) ? 'visible' : 'none'}>
                    Español
                </button>
                <button onClick={() => changeLang('eng')} className={(dropdownActive) ? 'visible' : 'none'}>
                    English
                </button>
            </div>
        </div>
    </>);
}

export default Sidebar;