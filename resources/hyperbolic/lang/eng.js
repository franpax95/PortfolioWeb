import React from 'react';



export const Navbar = {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
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
        subtitle: 'that I use.'
    }
};


const engTexts = {
    Navbar, Footer, Home, About
}

export default engTexts;