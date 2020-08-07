import React from 'react';
import { FaHtml5, FaCss3, FaPhp, FaReact, FaLaravel, FaNodeJs, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiCodeigniter, DiStreamline } from "react-icons/di";


export const Navbar = {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    spanish: 'Spanish',
    english: 'English'
};

export const Footer = {
    email: <><b>Email:</b> <i>fcojnavarrowork@gmail.com</i></>,
    phone: <><b>Phone Number:</b> <i>+34 697 883 410</i></>
};

export const Home = {
    header: {
        title: <>Welcome to the portfolio of <br /> Francisco Javier Navarro García</>,
        subtitle: 'Full-Stack developer and in love with web design'
    },
    section: [
        {
            title: 'Do you want to know more about me?',
            subtitle: 'Click if you want to know more about the technologies I use.',
            paragraph: <>
                I am a web developer born in Fuengirola, Málaga. I studied <b>Telematic Engineering</b> (<i>Telecommunications</i>) at the <b>University of Malaga(<i>UMA</i>)</b>.
                <br />
                Currently I am dedicated to developing web pages, especially on the <i>Front-End</i> part.
            </>,
            link: 'About me'
        },
        {
            title: 'Access the gallery',
            subtitle: 'to see my projects and what I am capable of.',
            paragraph: <>What I like most about a project is the visual part, the design. I am a programmer very attentive to the <b>UI/UX</b>, that is, the <i>user experience and its interface</i>.</>,
            link: 'Go to the gallery'
        },
        {
            title: 'Are you looking to contact me?',
            subtitle: <>Fill in the form in <b>contact</b>.</>,
            paragraph: <>Any questions you may have, without obligation, send me an email and we can chat to see the real possibilities of your project.</>,
            link: 'Contact me'
        }
    ]
};

export const About = {
    title: 'About me',
    subtitle: 'React & Laravel web developer',
    primary: {
        title: 'Main technologies',
        subtitle: 'that I use.',
        tech: [
            { title: 'HTML5', description: 'Más de 4 años programando con HTML5.', icon: <FaHtml5 /> },
            { title: 'CSS3', description: 'Más de 4 años programando con CSS.', icon: <FaCss3 /> },
            { title: 'JavaScript', description: 'Más de 4 años programando con JavaScript. También ECMA6 ~ 10', icon: <IoLogoJavascript /> },
            { title: 'PHP', description: 'Más de 4 años programando con PHP.', icon: <FaPhp /> },
            { title: 'React', description: 'Más de 2 años programando con ReactJS (librería).', icon: <FaReact /> },
            { title: 'Laravel', description: '1 año programando con Laravel (framework).', icon: <FaLaravel /> },
            { title: 'CodeIgniter', description: 'Más de 2 años programando con CodeIgniter (framework).', icon: <DiCodeigniter /> },
            { title: 'NodeJs', description: 'Uso de NodeJs.', icon: <FaNodeJs /> },
            { title: 'MySQL', description: 'Más de 3 años de experiencia con bases de datos relacionales (PostreQL, MySQL...)', icon: <DiStreamline /> },
            { title: 'Java', description: 'Más de 5 años programando con Java.', icon: <FaJava /> },
            { title: 'Lenguaje C', description: 'Más de 5 años programando con C.', icon: 'C' },
            { title: 'Lenguaje C++', description: 'Más de 1 año programando en C++.', icon: 'C++' }
        ]
    },
    secondary: {
        title: 'Diplomas de Platzi.com',
        subtitle: ''
    },
    terciary: {
        title: 'Otras tecnologías que he utilizado',
        list: [
            'experiencia usando Webpack, en concreto inicializando proyectos de React.',
            'uso de JQuery y algo de GraphQL.',
            'experiencia programando IoT, concretamente Arduino con JavaScript.',
            'experiencia con AndroidStudio en JAVA.'
        ]
    },
    quaternary: {
        title: 'Acerca de mí',
        subtitle: 'Desarrollador web Full-Stack',
        description: <>
            Sin duda, mi parte favorita es el <b>Front-End</b>. Puedo pasarme horas sólo para conseguir un pequeño detalle en un efecto o transición. Por ello, me siento muy cómodo con <b>React.js</b>. Es una librería que permite tener un control excelente de lo que utilizas o renderizas. <br /> Me considero muy detallista para lo que tenga que ver con la <b>UI/UX</b>.
            <br /><br />
            Algunas de las características o paquetes que he utilizado de React son <i>React Hooks</i>, <i>Redux</i>, <i>React Context</i>, <i>React/Reach Router</i>, <i>React Springs</i>, entre otras muchas.
            <br /><br /><br /><br />
            El <b>Back-End</b> fue donde empecé, en la carrera, con el framework <i>CodeIgniter</i>. Después de un par de años programando, me enteré de <b>Laravel</b> y desde entonces no he necesitado nada más.
            <br /><br />
            Manejo de <i>bases de datos</i>, <i>uso de APIs públicas y/o personalizadas</i> y <i>gestión de usuarios</i> son algunas de las cosas que puedo hacer.
        </>
    }
};


const engTexts = {
    Navbar, Footer, Home, About
}

export default engTexts;