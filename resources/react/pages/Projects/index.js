import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';


import Modal from '../../components/Modal';
import Card from '../../components/Card';
import { FrontProjectCard, BackProjectCard } from '../../components/ProjectCard';

import { BsCardImage } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import './Projects.css';

const Projects = () => {
    const [texts, setLang] = useLanguage();

    const [isModalOn, setIsModalOn] = useState(false);
    const [currentIdProject, setCurrentIdProject] = useState(0);

    const setModal = (id) => {
        setIsModalOn(true);
        setCurrentIdProject(id);
    }

    const stopPropagation = e => {
        e.stopPropagation();
    }

    const onPreviewClick = (e, id) => {
        stopPropagation(e);
        setModal(id)
    }

    const frontView = (name, index) => {
        const frontStyles = [
            { backgroundColor: 'cornflowerblue', color: 'white' },
            { backgroundColor: '#06997C', color: 'white' },
            { backgroundColor: '#FFA621', color: 'black' },
            { backgroundColor: '#41A5E8', color: 'white' },
            
        ];

        return (
            <FrontProjectCard
                name={name}
                style={{ ...frontStyles[index] }}
            />
        );
    };

    const backView = (project, index) => {
        const backStyles = [
            { backgroundColor: 'lightskyblue', color: '#262626' },
            { backgroundColor: '#429906', color: 'white' },
            { backgroundColor: '#F6B820', color: 'black' },
            { backgroundColor: '#38F5DB', color: 'black' },
            
        ];

        return (
            <BackProjectCard
                {...project}
                onPreviewClick = {(e) => onPreviewClick(e, project.id)}
                style={{ ...backStyles[index] }}
            />
        );
    };

    return (<>
        {isModalOn && <Modal {...texts.Projects.projects[currentIdProject]} onClickOutside={() => setIsModalOn(false)} />}

        <div className="Projects">
            <h1>{texts.Projects.title}</h1>

            <div className="list">
                {texts.Projects.projects.map((project, key) => (
                    <Card
                        key={key}
                        front = {frontView(project.name, key)}
                        back = {backView(project, key)}
                        width = '400px'
                        height = '400px'
                    />
                ))}

                
            </div>
        </div>
    </>);
}

export default Projects;