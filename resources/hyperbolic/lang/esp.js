import React from 'react';
import { FaHtml5, FaCss3, FaPhp, FaReact, FaLaravel, FaNodeJs, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiCodeigniter, DiStreamline } from "react-icons/di";



export const Navbar = {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Mis trabajos',
    spanish: 'Español',
    english: 'Inglés'
};

export const Footer = {
    email: <><b>Email:</b> <i>fcojnavarrowork@gmail.com</i></>,
    phone: <><b>Teléfono:</b> <i>+34 697 883 410</i></>
};

export const Home = {
    header: {
        title: <>¡Bienvenido al portfolio de <br /> Francisco Javier Navarro García!</>,
        subtitle: 'Desarrollador web Full-Stack y enamorado del diseño'
    },
    section: [
        {
            title: '¿Quieres conocer más sobre mí?',
            subtitle: 'Clicka si quieres conocer más sobre las tecnologías que utilizo.',
            paragraph: <>
                Soy un desarrollador web nativo de Fuengirola, Málaga. Estudié la carrera de <b>Ingeniería Telemática</b> (<i>Telecomunicaciones</i>) en la <b>Universidad de Málaga (<i>UMA</i>)</b>.
                <br />
                Actualmente me dedico a desarrollar páginas web, sobretodo de la parte del <i>Front-End</i>.
            </>,
            link: 'Sobre mí'
        },
        {
            title: 'Accede a la galería',
            subtitle: 'para ver mis proyectos y de lo que soy capaz.',
            paragraph: <>Lo que más me gusta de un proyecto es la parte visual, el diseño. Soy un programador muy atento a la <b>UI/UX</b>, es decir, la <i>experiencia de usuario y su interfaz</i>.</>,
            link: 'Ir a la galería'
        },
        {
            title: '¿Buscas ponerte en contacto conmigo?',
            subtitle: <>Rellena el formulario en <b>contacto</b>.</>,
            paragraph: <>Cualquier duda que pudieras tener, sin compromiso, mándame un email y podemos charlar para ver las posibilidades reales de tu proyecto.</>,
            link: 'Contacta conmigo'
        }
    ]
};

export const About = {
    title: 'Sobre mí',
    subtitle: 'Desarrollador web React y Laravel.',
    primary: {
        title: 'Principales tecnologías',
        subtitle: 'que utilizo.',
        tech: [
            { title: 'HTML5', description: 'Más de 4 años programando con HTML5.', icon: <FaHtml5 /> },
            { title: 'CSS3', description: 'Más de 4 años programando con CSS.', icon: <FaCss3 /> },
            { title: 'JavaScript', description: 'Más de 4 años programando con JavaScript. También ECMA6 ~ 10', icon: <IoLogoJavascript /> },
            { title: 'PHP', description: 'Más de 4 años programando con PHP.', icon: <FaPhp /> },
            { title: 'React', description: 'Más de 2 años programando con ReactJS (librería).', icon: <FaReact /> },
            { title: 'Laravel', description: '1 año programando con Laravel (framework).', icon: <FaLaravel /> },
            { title: 'CodeIgniter', description: 'Más de 2 años programando con CodeIgniter (framework).', icon: <DiCodeigniter /> },
            { title: 'NodeJs', description: 'Uso de NodeJs', icon: <FaNodeJs /> },
            { title: 'MySQL', description: 'Más de 3 años de experiencia con bases de datos relacionales (PostreQL, MySQL...)', icon: <DiStreamline /> },
            { title: 'Java', description: 'Más de 5 años programando con Java.', icon: <FaJava /> },
            { title: 'Lenguaje C', description: 'Más de 5 años programando con C.', icon: 'C' },
            { title: 'Lenguaje C++', description: 'Más de 1 año programando en C++.', icon: 'C++' }
        ]
    },
    secondary: {
        title: '',
        subtitle: ''
    }
};

const espTexts = {
    Navbar, Footer, Home, About
}

export default espTexts;