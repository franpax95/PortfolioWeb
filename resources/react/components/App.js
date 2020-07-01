import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

import Home from '../pages/Home';
import Develop from '../pages/Develop';

import './App.css';



const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
} 


const App = () => {
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });



    return (<>
        {/* {(window.innerWidth > 650) ? <Navbar /> : <Navbar />} */}
        <Navbar />
        <Header />
        <div className="App">
            <ScrollToTop />

            {transitions.map(({ item: location, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={location}>
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/develop" component={Develop} />
                    </Switch>
                </animated.div>
            ))}
        </div>
    </>);
}

export default App;