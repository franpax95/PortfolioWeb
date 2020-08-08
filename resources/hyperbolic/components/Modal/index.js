import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { useSpring, animated } from 'react-spring';

import Slider from 'react-slick';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const Slice = ({ url = '' }) => <div className="Slice" style={{ backgroundImage: `url(${url})` }}></div>;

export const ProjectModal = ({
    id,
    srcs = [],
    onClose = undefined
}) => {
    const ref = useRef();
    const leftRef = useRef();
    const rightRef = useRef();

    const [index, setIndex] = useState(0);
    useEffect(() => { setIndex(0); }, [id]);

    const onMouseEnter = () => {
        leftRef.current.style.opacity = 1;
        rightRef.current.style.opacity = 1;
    }
    const onMouseLeave = () => {
        leftRef.current.style.opacity = 0;
        rightRef.current.style.opacity = 0;
    }

    /** useSpring settings */
    const spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 200 }
    });

    /** Slider settings */
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        arrows: false,
        // useTransform: false,
        rows: 1,
        beforeChange: (current, next) => setIndex(next)
    };

    return ReactDOM.createPortal(
        <animated.div className="Modal" onClick={onClose} style={spring}>
            <div className="layout" onClick={e => { e.stopPropagation(); ref.current.slickGoTo(index + 1); }} onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
                <button ref={leftRef} className="left" onClick={() => ref.current.slickGoTo(index - 1)}>
                    <MdKeyboardArrowLeft />
                </button>
                <button ref={rightRef} className="right" onClick={() => ref.current.slickGoTo(index + 1)}>
                    <MdKeyboardArrowRight />
                </button>
                <Slider ref={ref} {...settings} style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}>
                    {srcs.map((src, key) => <Slice key={key} url={src} />)}
                </Slider>
            </div>
        </animated.div>,
        document.body
    );
}