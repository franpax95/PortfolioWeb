import React, { useState } from 'react';
import './Projects.css';

import { useLanguage } from '../../hooks/useLanguage';

import Footer from '../../components/Footer';
import Title, { SubTitle } from '../../components/Title';
import { LargeImage } from '../../components/Image';
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
        <div className="Projects">
            <Title color='#4d4d4d'>{txt.title}</Title>
            <SubTitle color='#666666'>{txt.subtitle}</SubTitle>
            
            <hr style={{ 
                width: '10%',
                margin: '5vh 0 10vh 0',
                border: 'none', 
                borderTop: 'solid 1.5px gray' 
            }} />

            <LargeImage height='40vh' width='80%' src='/img/projects/header.jpg' alt="" placeholder={false} />


            <div className="list">
                {txt.projects.map(project => <ProjectCard {...project} key={project.id} onClick={onProjectClick} />)}
            </div>
            {modal && <ProjectModal id={txt.projects[currentProject].id} srcs={txt.projects[currentProject].srcs} onClose={() => setModal(false)} />}
        
            <Footer src='/img/hyperbolic/home_section_2_dark.jpg' />
        </div>
    );
}

export default Projects;