import React from 'react';
import './styles.css';

import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';

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
    id = 0,
    cover = '',
    title = 'Title',
    description = 'Description',
    elink = '',
    glink = '',
    onClick = undefined
}) => {


    return (
        <div className="ProjectCard">
            <div className="img">
                <button className="layout">
                    <div className="view" onClick={() => onClick(id)}>
                        <span>View</span>
                    </div>
                    <div className="icons">
                        <a href={glink} target="_blank" ><FaGithub />GitHub</a>
                        <a href={elink} target="_blank"><GoLinkExternal />Visit webpage</a>
                    </div>
                </button>
                <img src={cover} alt={title} />
            </div>

            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    );
}
