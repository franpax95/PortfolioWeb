import React from 'react';

import { BsCardImage } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import './ProjectCard.css';

export const BackProjectCard = ({ 
    description,
    external_link = '',
    github_link = '',
    onPreviewClick,
    style = {}
}) => (
    <div className="ProjectCard BackProjectCard" style={{ ...style }}>
        <div className="links">
            <button onClick={onPreviewClick}>
                <BsCardImage />
            </button>
            <a href={external_link} target="_blank" onClick={e => e.stopPropagation()}>
                <FiExternalLink />
            </a>
            <a href={github_link} target="_blank" onClick={e => e.stopPropagation()}>
                <AiFillGithub />
            </a>
        </div>

        <div className="description">
            {description}
        </div>
    </div>
);

export const FrontProjectCard = ({ name = '', style = {} }) => (
    <div className="ProjectCard FrontProjectCard" style={{ ...style }}>
        {name}
    </div>
);