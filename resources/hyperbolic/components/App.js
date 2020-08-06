import React from 'react';
import './App.css';

import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';

import Navbar from '../components/Navbar';

import Home from '../pages/Home';
import About from '../pages/About';
// import Projects from '../pages/Projects';


const App = () => {
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses
    });



    return (<>
        <Navbar />
        {transitions.map(({ item: location, props, key }) => (
            <animated.div key={key} style={{ ...props, width: '100%', height: '100%' }}>
                <div className="App">
                    <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            {/* <Route exact path="/projects" component={Projects} /> */}
                    </Switch>
                </div>
            </animated.div>
        ))}
    </>);
}

export default App;