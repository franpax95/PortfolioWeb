import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';

import './Home.css';

import { nl2br } from '../../util';
import { Home as EspHomeTexts } from '../../lang/esp';
import { Home as EngHomeTexts } from '../../lang/eng';

const Home = () => {
    const [state, setState] = useContext(Context);
    const [homeTexts, setHomeTexts] = useState(
        (state.lang === 'esp') ? EspHomeTexts : EngHomeTexts
    );
    useEffect(() => {
        setHomeTexts(
            (state.lang === 'esp') ? EspHomeTexts : EngHomeTexts
        );
    }, [state.lang]);

    return (
        <div className="Home">
            Home!
        </div>
    );
}

export default Home;