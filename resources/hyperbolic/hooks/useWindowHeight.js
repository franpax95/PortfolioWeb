import { useState, useEffect } from 'react';

export const useWindowHeight = () => {
    const [height, setHeight] = useState(window.scrollY);
    const updateHeight = () => { setHeight(window.scrollY); }

    useEffect(() => {
        window.addEventListener("scroll", updateHeight);
        return(() => window.removeEventListener("scroll", updateHeight));
    });

    return height;
}