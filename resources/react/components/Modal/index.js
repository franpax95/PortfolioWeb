import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import './Modal.css';

const Modal = ({ name, images = [], onClickOutside }) => {
    const ref = useRef();
    const [currentPage, setCurrentPage] = useState(0);

    /** componentDidUpdate */
    useEffect(() => {
        setCurrentPage(0);
    }, [images]);

    const changePage = (page) => {
        ref.current.style.opacity = 0;
        setTimeout(() => {
            setCurrentPage(page);
            ref.current.style.opacity = 1;
        }, 500);
    }

    const prevImg = (e) => {
        e.stopPropagation();

        if(currentPage === 0)
            changePage(images.length - 1);
        else
            changePage(currentPage - 1);
    }

    const nextImg = (e) => {
        e.stopPropagation();

        if((currentPage + 1) >= images.length) 
            changePage(0);
        else 
            changePage(currentPage + 1);
    }

    return (
        <div className="Modal" onClick={onClickOutside}>
            <div className="container">
                <button onClick={prevImg} className="left">
                    <AiOutlineArrowLeft />
                </button>

                <div className="wrapper" ref={ref} onClick={nextImg}>
                    {images.map((img, key) => (
                        <img 
                            src={img} 
                            alt={`${name} ${key}`} 
                            key={key} 
                            className={(key !== currentPage) ? 'none' : ''}
                        />
                    ))}
                </div>

                <button onClick={nextImg} className="right">
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Modal;