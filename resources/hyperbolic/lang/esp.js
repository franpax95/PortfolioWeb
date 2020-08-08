import React from 'react';
import { FaHtml5, FaCss3, FaPhp, FaReact, FaLaravel, FaNodeJs, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiCodeigniter, DiStreamline } from "react-icons/di";



export const Navbar = {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Mis trabajos',
    contact: 'Contacto',
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

export const Contact = {
    title: 'Contacto',
    subtitle: 'Si necesitas de un diseño, una página para tu negocio, un trabajo de universidad... Ponlo en el cuerpo del mensaje y estudiamos juntos tu caso para ver las posibilidades reales de tu proyecto.',
    input: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje'
    }
};

export const Projects = {
    title: 'Mis proyectos recientes',
    subtitle: <>
        Aquí colgaré los proyectos que vaya realizando.
        <br />¡Podrás ver una vista previa desde aquí mismo o visitar directamente la página!
        <br /><i>Para programadores, también un enlace a GitHub.</i>
    </>,
    projects: [
        {
            id: 0,
            title: 'Entrenamiento App',
            description: <>
                Página desarrollada con React y Laravel. Usa Redux para la gestión vertical de las props.
                <br />
                Puedes crearte un usuario y empezar a personalizar tus ejercicios completamente gratis. Accede desde el móvil en cualquier parte.
            </>,
            elink: 'https://entrenamiento-app.herokuapp.com/',
            glink: 'https://github.com/franpax95/Entrenamiento',
            cover: '/img/projects/entrenamiento/img0.jpg',
            srcs: [
                '/img/projects/entrenamiento/img0.jpg',
                '/img/projects/entrenamiento/img1.jpg',
                '/img/projects/entrenamiento/img2.jpg',
                '/img/projects/entrenamiento/img3.jpg',
                '/img/projects/entrenamiento/img4.jpg',
                '/img/projects/entrenamiento/img5.jpg',
                '/img/projects/entrenamiento/img6.jpg'
            ]
        },
        {
            id: 1,
            title: 'Joe Williams portfolio',
            description: <>
                Página desarrollada con React y Laravel. Usa Redux.
                <br />
                Portfolio personal de Joe Williams, diseñador gráfico. <br />
                Hecha en colaboración con <b>@DMM161</b>.
            </>,
            elink: 'https://joewilliams.herokuapp.com/',
            glink: 'https://github.com/franpax95/JoeWilliamsWeb',
            cover: '/img/projects/joewilliams/img0.jpg',
            srcs: [
                '/img/projects/joewilliams/img0.jpg',
                '/img/projects/joewilliams/img1.jpg',
                '/img/projects/joewilliams/img2.jpg',
                '/img/projects/joewilliams/img3.jpg',
                '/img/projects/joewilliams/img4.jpg',
                '/img/projects/joewilliams/img5.jpg',
                '/img/projects/joewilliams/img6.jpg',
                '/img/projects/joewilliams/img7.jpg',
                '/img/projects/joewilliams/img8.jpg'
            ]
        },
        {
            id: 2,
            title: 'Autoescuela Las Lagunas',
            description: <>
                Página desarrollada con React, <i>react-springs</i> para transición entre rutas.
                <br />
                Página de Autoescuela Las Lagunas (<i>ahora Autoescuela Servial</i>). Disponible en Español e Inglés.
            </>,
            elink: 'https://aelaslagunas.franpax95.vercel.app/',
            glink: 'https://github.com/franpax95/aelaslagunas',
            cover: '/img/projects/aelaslagunas/img0.jpg',
            srcs: [
                '/img/projects/aelaslagunas/img0.jpg',
                '/img/projects/aelaslagunas/img1.jpg',
                '/img/projects/aelaslagunas/img2.jpg',
                '/img/projects/aelaslagunas/img3.jpg',
                '/img/projects/aelaslagunas/img4.jpg',
                '/img/projects/aelaslagunas/img5.jpg'
            ]
        },
        {
            id: 3,
            title: 'Petgram',
            description: <>
                Aplicación desarrollada con React. Utiliza <i>GraphQL</i> para peticiones a una api hecha con <i>Express</i>.
                <br />
                Tutorial Platzi <i>React Avanzado</i>. Sube y comparte fotos de mascotas.
            </>,
            elink: 'https://curso-platzi-react-avanzado.franpax95.now.sh/',
            glink: 'https://github.com/franpax95/Curso-Platzi-React-Avanzado',
            cover: '/img/projects/petgram/img0.jpg',
            srcs: [
                '/img/projects/petgram/img0.jpg',
                '/img/projects/petgram/img1.jpg',
                '/img/projects/petgram/img2.jpg',
                '/img/projects/petgram/img3.jpg',
                '/img/projects/petgram/img4.jpg'
            ]
        },
        {
            id: 4,
            title: 'Restaurante Veggie',
            description: <>
                Diseño realizado con React, también en versión móvil.
                <br />
                Temática veggie. Usa react-spring para las transiciones.
            </>,
            elink: 'https://restaurante-comida-vegana.vercel.app',
            glink: 'https://github.com/franpax95/restaurante-comida-vegana',
            cover: '/img/projects/restauranteveggie/img0.jpg',
            srcs: [
                '/img/projects/restauranteveggie/img0.jpg',
                '/img/projects/restauranteveggie/img1.jpg',
                '/img/projects/restauranteveggie/img2.jpg',
                '/img/projects/restauranteveggie/img3.jpg',
                '/img/projects/restauranteveggie/img4.jpg',
                '/img/projects/restauranteveggie/img5.jpg',
                '/img/projects/restauranteveggie/img6.jpg',
                '/img/projects/restauranteveggie/img7.jpg'
            ]
        },
        {
            id: 5,
            title: 'Love App',
            description: <>
                Aplicación desarrollada con React. Muestra la compatibilidad con otra persona mediante los nombres.
                <br />
                Utiliza una API pública de RapidAPI.
            </>,
            elink: 'https://love-match-app.vercel.app/',
            glink: 'https://github.com/franpax95/love-match-app',
            cover: '/img/projects/loveapp/img0.jpg',
            srcs: [
                '/img/projects/loveapp/img0.jpg',
                '/img/projects/loveapp/img1.jpg',
                '/img/projects/loveapp/img2.jpg'
            ]
        },
        {
            id: 6,
            title: 'Budismo Info App',
            description: <>
                Diseño realizado con React. 
                <br />
                Información relacionada con el budismo.
            </>,
            elink: 'https://budismo-app.vercel.app/',
            glink: 'https://github.com/franpax95/budismo-app',
            cover: '/img/projects/budismo/img0.jpg',
            srcs: [
                '/img/projects/budismo/img0.jpg',
                '/img/projects/budismo/img1.jpg',
                '/img/projects/budismo/img2.jpg'
            ]
        },
        {
            id: 7,
            title: 'Gallery Portfolio',
            description: <>
                Diseño hecho con React. React-spring para la <i>experiencia de usuario</i>.
                <br />
                Para portfolios de fotógrafos, diseñadores gráficos...
            </>,
            elink: 'https://gallery-rho.vercel.app/',
            glink: 'https://github.com/franpax95/gallery',
            cover: '/img/projects/gallery/img0.jpg',
            srcs: [
                '/img/projects/gallery/img0.jpg',
                '/img/projects/gallery/img1.jpg',
                '/img/projects/gallery/img2.jpg',
                '/img/projects/gallery/img3.jpg',
                '/img/projects/gallery/img4.jpg'
            ]
        },
        {
            id: 8,
            title: 'Mountain Design Portfolio',
            description: <>
                Diseño hecho con React. React-spring para la <i>experiencia de usuario</i>.
                <br />
                Diseño de un portfolio y/o negocios.
            </>,
            elink: 'https://mountain-design.vercel.app/',
            glink: 'https://github.com/franpax95/Mountain-Design',
            cover: '/img/projects/mountainportfolio/img0.jpg',
            srcs: [
                '/img/projects/mountainportfolio/img0.jpg',
                '/img/projects/mountainportfolio/img1.jpg',
                '/img/projects/mountainportfolio/img2.jpg',
                '/img/projects/mountainportfolio/img3.jpg',
                '/img/projects/mountainportfolio/img4.jpg',
                '/img/projects/mountainportfolio/img5.jpg'
            ]
        },
    ]
};

const espTexts = {
    Navbar, Footer, Home, About, Contact, Projects
}

export default espTexts;