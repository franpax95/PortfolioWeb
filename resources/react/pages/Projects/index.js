import React, { useState } from 'react';
import './Projects.css';

import { useLanguage } from '../../hooks/useLanguage';

import Layout from '../../components/Layout';
import { ProjectCard } from '../../components/Card';
import { ProjectModal } from '../../components/Modal';


const Projects = (props) => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    const { Projects: txt } = texts;

    const [modal, setModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);

    const onProjectClick = (index) => {
        setModal(true);
        setCurrentProject(index);
    }

    return (
        <Layout 
            className = "Projects"
            title = {txt.title}
            subtitle = {txt.subtitle}
            headerSrc = '/img/projects/header.jpg'
            footerSrc = '/img/projects/footer.jpg'
        >
            <div className="list">
                {txt.projects.map(project => <ProjectCard {...project} key={project.id} onClick={onProjectClick} />)}
            </div>
            {modal && <ProjectModal id={txt.projects[currentProject].id} srcs={txt.projects[currentProject].srcs} onClose={() => setModal(false)} />}
        </Layout>
    );
}

export default Projects;