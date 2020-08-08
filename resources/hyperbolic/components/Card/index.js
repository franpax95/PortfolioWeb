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

}) => <div className="ProjectCard">
    <LargeImage height='300px' width='100%%' src='/img/projects/header.jpg' alt="" placeholder={false} />
    <div className="icons">

    </div>
    <div className="title">

    </div>
    <div className="description">
        
    </div>
</div>