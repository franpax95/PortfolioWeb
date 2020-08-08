import React from 'react';
import './styles.css';

import { LargeImage } from '../../components/Image';

export const IconCard = ({
    width = '350px',
    title = 'Title',
    description = 'Description',
    icon
}) => <div className="IconCard" style={{ width }}>
    <div className="icon">{icon}</div>
    <div className="title">{title}</div>
    <div className="description">{description}</div>
</div>;

export const ProjectCard = ({
    src = '',
    title = 'Title',
    description = 'Description',
    onClick = undefined
}) => {


    return (
        <div className="ProjectCard">
            <div className="img">
                <button className="layout" onClick={onClick}>
                    <div>View</div>
                </button>
                <img src={src} alt={title} />
            </div>

            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    );
}
