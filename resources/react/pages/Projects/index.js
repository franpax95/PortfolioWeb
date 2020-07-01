import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

import ProjectCard from '../../components/ProjectCard';
import Modal from '../../components/Modal';

import './Projects.css';

const Projects = () => {
    const [texts, setLang] = useLanguage();

    const [isModalOn, setIsModalOn] = useState(false);
    const [currentIdProject, setCurrentIdProject] = useState(0);

    const setModal = (id) => {
        setIsModalOn(true);
        setCurrentIdProject(id);
    }

    return (<>
        {isModalOn && <Modal {...texts.Projects.projects[currentIdProject]} onClickOutside={() => setIsModalOn(false)} />}

        <div className="Projects">
            <h1>{texts.Projects.title}</h1>

            <div className="list">
                {texts.Projects.projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                        onPreviewClick={() => setModal(project.id)}
                    />
                ))}
            </div>
        </div>
    </>);
}

export default Projects;