import React from 'react';
import './styles.css';

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