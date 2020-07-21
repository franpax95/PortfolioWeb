import React from 'react';
import Slider from 'react-slick';

import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slice = ({ url = '', width = '500px', height = '200px' }) => (
    <div 
        className="Slice"
        style={{
            width,
            height,
            backgroundImage: `url(${url})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            border: 'solid 1px whitesmoke',
            borderRadius: '20px'
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center'
        }}
    ></div>
);

const SlickCarouselSlider = ({
    images = [],
    width = '500px',
    height = '300px',
}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500
    };


    return (
        <div 
            className="SlickCarouselSlider"
            style={{ width, height }}
        >
            <Slider {...settings}>
                {images.map((url, key) => (
                    <Slice
                        key={key}
                        url={url}
                        width={width}
                        height={height}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default SlickCarouselSlider;