import React from 'react';
import SimpleSlideImages from '../SimpleSlideImages';
import { useInnerWidth } from '../../hooks/useInnerWidth';
import './Modal.css';

const Modal = ({ images = [], onClickOutside }) => {
    const width = useInnerWidth();

    return(
        <div className="Modal" onClick={onClickOutside}>
            <SimpleSlideImages
                width = {(width > 600) ? '60vw' : '100%'}
                height = {(width > 600) ? '50vh' : '300px'}
                imgArr = {images}
                backgroundSize = 'contain'
            />
        </div>
    );
}

export default Modal;