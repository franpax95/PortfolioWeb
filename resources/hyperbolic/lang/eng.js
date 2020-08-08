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
        subtitle: 'Full-Stack developer and design lover'
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
            { title: 'HTML5', description: 'More than 4 years programming with HTML5.', icon: <FaHtml5 /> },
            { title: 'CSS3', description: 'More than 4 years programming with CSS.', icon: <FaCss3 /> },
            { title: 'JavaScript', description: 'More than 4 years programming with JavaScript. Also ECMA6 ~ 10.', icon: <IoLogoJavascript /> },
            { title: 'PHP', description: 'More than 4 years programming with PHP.', icon: <FaPhp /> },
            { title: 'React', description: 'More than 2 years programming with ReactJS (library).', icon: <FaReact /> },
            { title: 'Laravel', description: '1 year programming with Laravel (framework).', icon: <FaLaravel /> },
            { title: 'CodeIgniter', description: 'More than 2 years programming with CodeIgniter (PHP framework).', icon: <DiCodeigniter /> },
            { title: 'NodeJs', description: 'Using NodeJs.', icon: <FaNodeJs /> },
            { title: 'MySQL', description: 'More than 3 years of experience with relational databases (PostreQL, MySQL ...).', icon: <DiStreamline /> },
            { title: 'Java', description: 'More than 5 years programming with Java.', icon: <FaJava /> },
            { title: 'C Language', description: 'More than 5 years programming with C.', icon: 'C' },
            { title: 'C++ Language', description: 'More than 1 year programming in C ++.', icon: 'C++' }
        ]
    },
    secondary: {
        title: 'Platzi.com Diplomas',
        subtitle: ''
    },
    terciary: {
        title: 'Other technologies I have used',
        list: [
            'experience using Webpack, specifically initializing React projects.',
            'usage of JQuery and some GraphQL.',
            'experience programming IoT, specifically Arduino with JavaScript.',
            'experience with AndroidStudio in JAVA.'
        ]
    },
    quaternary: {
        title: 'About me',
        subtitle: 'Full-Stack web developer',
        description: <>
            Without a doubt, my favorite part is the <b>Front-End</b>. I can spend hours just to get a little detail in an effect or transition. Therefore, I am very comfortable with <b>React.js</b>. It is a library that allows you to have excellent control of what you use or render.<br />I consider myself very detailed when it comes to <b>UI/UX</b>.
            <br /><br />
            Some of the features and packages that I have used from React are <i>React Hooks</i>, <i>Redux</i>, <i>React Context</i>, <i>React/Reach Router</i>, <i>React Springs</i>, entre otras muchas.
            <br /><br /><br /><br />
            The <b>Back-End</b> was where I started, in my career, with the <i>CodeIgniter</i> framework. After a couple of years of programming, I found out about <b>Laravel</b> and since then I haven't needed anything else.
            <br /><br />
            <i>Database management</i>, <i>use of public and/or custom APIs</i> and <i>user management</i> are some of the things I can do.
        </>
    }
};

export const Contact = {
    title: 'Contact',
    subtitle: 'If you need a design, a page for your business, a university project ... Get in touch and we will study your case together to see the real possibilities of your project.',
    input: {
        name: 'Name',
        email: 'Email',
        message: 'Message'
    }
};

export const Projects = {
    title: 'My recent work',
    subtitle: <>
        Here I will post the projects that I will carry out.
        <br />You can see a preview from right here or visit the page directly!
        <br /><i>For programmers, also a link to GitHub.</i>
    </>,
    projects: [
        {
            id: 0,
            title: 'Joe Williams portfolio',
            description: <>
                Page developed with React and Laravel. Use Redux.
                <br />
                Personal portfolio of Joe Williams, graphic designer.
                <br />
                Made in collaboration with <b>@DMM161</b>.
            </>,
            elink: 'https://velvetdistortion.com',
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
            id: 1,
            title: 'Mountain Design Portfolio',
            description: <>
                Design made with React. React-spring for <i>user experience</i>.
                <br />
                Design of a portfolio and/or business.
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
        {
            id: 2,
            title: 'Las Lagunas Driving School',
            description: <>
                Page developed with React, <i>react-springs</i> for transition between routes.
                <br />
                Las Lagunas Driving School page (<i>now Servial Driving School</i>). Available in Spanish and English.
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
                Application developed with React. Use <i>GraphQL</i> for requests to an api made with <i>Express</i>.
                <br />
                Platzi <i>React Advanced</i> tutorial. Upload and share photos of pets.
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
            title: 'Veggie Restaurant',
            description: <>
                Design made with React, also in mobile version.
                <br />
                Veggie theme. Use react-spring for transitions.
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
            title: 'Gallery Portfolio',
            description: <>
                Design made with React. React-spring for <i>user experience</i>.
                <br />
                For portfolios of photographers, graphic designers...
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
            id: 6,
            title: 'Buddhism Info App',
            description: <>
                Design made with React.
                <br />
                Information related to Buddhism.
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
            title: 'Love App',
            description: <>
                Application developed with React. Show compatibility with another person through names.
                <br />
                It uses a RapidAPI public API.
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
            id: 8,
            title: 'Training App Web',
            description: <>
                Page developed with React and Laravel. Use Redux for vertical props management.
                <br />
                You can create an user and start customizing your exercises completely free. Access from mobile anywhere.
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
        
    ]
};


const engTexts = {
    Navbar, Footer, Home, About, Contact, Projects
}

export default engTexts;