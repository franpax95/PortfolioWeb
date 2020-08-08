import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { animated, useSpring } from 'react-spring';

export const ProjectModal = ({
    srcs = []
}) => {
    const spring = useSpring({
        from: { opacity: '0' },
        to: { opacity: '1' },
        config: { duration: 400 }
    });

    return ReactDOM.createPortal(
        <div className="Modal" onClick={onClose}>
            <animated.div
                className = "content"
                style = {spring}
                onClick = {e => e.stopPropagation()}
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
            >

            </animated.div>
        </div>
    )
}