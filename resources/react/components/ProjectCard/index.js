import React, { useRef } from 'react';
import { BsCardImage } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import './ProjectCard.css';

const ProjectCard = ({ name, description, external_link, github_link, onPreviewClick }) => {
    const ref = useRef();

    const handleOnMouseEnter = () => {
        ref.current.style.top = '0';
    }

    const handleOnMouseLeave = () => {
        ref.current.style.top = '400px';
    }

    return(
        <div className="ProjectCard" onMouseEnter={() => handleOnMouseEnter()} onMouseLeave={() => handleOnMouseLeave()}>
            <div className="name">
                {name}
            </div>

            <div className="container" ref={ref} style={{ top: '400px' }}>
                <div className="links">
                    <button onClick={onPreviewClick}>
                        <BsCardImage />
                    </button>
                    <a href={external_link} target="_blank">
                        <FiExternalLink />
                    </a>
                    <a href={github_link} target="_blank">
                        <AiFillGithub />
                    </a>
                </div>

                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;