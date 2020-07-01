import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const BASE_URL = '/img/header/header';
const FORMAT = '.jpg';

const getIndex = (pathname) => {
    if((pathname === '/') || pathname === '/home')
        return 1;
    else if(pathname === '/about') 
        return 4;
    else
        return 3;
}

const Header = () => {
    const { pathname } = useLocation();
    const [index, setIndex] = useState(getIndex(pathname));

    // useEffect(() => {
    //     setIndex(getIndex(pathname));
    // }, [pathname]);

    return(
        <div className="Header">
            <img 
                src={`${BASE_URL}${index}${FORMAT}`}
                alt="header"
            />
        </div>
    );
}

export default Header;