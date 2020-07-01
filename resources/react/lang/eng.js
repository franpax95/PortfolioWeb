import React from 'react';



export const Navbar = {
    home: 'Home',
    about: 'About',
    projects: 'Projects'
};



export const Home = {
    title: 'Are you looking for a web developer?',
    subtitle: 'I am a web developer and programmer from Fuengirola, Malaga. \n I create web applications, usually with React.',
    emailbtn: 'Send me an email',
    article: <>
        Welcome to the portfolio of <i>Francisco Javier Navarro García</i>! <br />
        If you need a website, do not hesitate to contact me with any questions or queries.
        Without commitment, I am a humble programmer.
        <br /><br />
        I create <b> nice </b> and <b> functional </b> pages for small businesses. You can take a look at the <b> Projects </b> tab. <br />
        Are you clear about your business idea? Together we can capture it on the web!
        <br /><br />
        <span style={{fontSize: '1.1em'}}><b>Email</b>: fcojnavarrowork@gmail.com </span>
        <br />
        <b>Phone Number</b>: +34 697 883 410
    </>
};



export const About = {
    title: 'Hey! I am Francisco',
    subtitle: <>FullStack developer,<br />responsive design lover</>,
    lasttitle: 'Welcome to my personal portfolio. I hope that its design and content are to your liking and, above all, that you find what you have come to look for :)',
    articles: [
        <>
            Despite being a web developer, I have completed several years of Telematics Engineering at UMA. There I discovered this sector and immediately I
            I fell in love and fell in love with him. My goal is to be a complete and capable <i> FullStack </i> programmer.
        </>,
        <>
            For <b> Front-End </b>, my favorite technology / library is <b> React.js </b>. In addition, it is the one that I have developed the most and have gone the furthest in recent years.
            I really like to program with React. <br /> For the most knowledgeable, I love programming <i> functional components </i>. Both project and code are well structured and clean.
            <br /> <b> Redux </b>, <i> Context </i>, <i> Hooks </i>, <i> React-Router </i>, <i> React-Springs </i> ... are some of the tools that I use when programming.
        </>,
        <>
            For the <b> Back-End </b>, I usually use <b> Laravel </b> as the <i> framework </i>, but I've also programmed with <b> CodeIgniter </b>. <br /> Management of <b> databases </b>, <b>user
            authentication</b> or <b> using public and custom APIs </b> are some of the things I can do.
        </>
    ],
    techs: {
        title: 'Summary of the most important technologies I use',
        list: [
            <> more than 4 years of experience in <b> HTML </b>, <b> CSS </b>, <b> JavaScript (<i> ECMA6 </i>) </b> and <b> PHP </b>. </>,
            <> more than 2 years of experience with <b> React.js </b> </>,
            <> more than 2 years of experience in using <b> CodeIgniter </b> </>,
            <> about 1 year of experience using <b> Laravel </b> </>,
            <> use of relational databases: <b> MySQL </b>, <b> SQLite </b>, <b> PostgreSQL </b> ... </>,
            <> use of <b> Node.js </b> and <b> Webpack </b>. </>
        ]
    },
    otherTechs: {
        title: 'Other technologies I have used',
        list: [
            <> use of <b> JQuery </b> and <b> GraphQL </b> </>,
            <> more than 4 years programming <b> JAVA </b> in the degree, especially focused on Telecommunications (<i> sockets, servlets ... </i>) </>,
            <> more than 5 years programming <b> C </b> in the race. </>,
            <> experience with <b> C ++ </b> </>,
            <> experience programming <b> IoT </b>, specifically <i> Arduino with JavaScript </i>. </>,
            <> experience with <b> AndroidStudio </b> in <i> JAVA </i>. </>
        ]
    }
};



export const Projects = {
    title: 'My Projects',
    projects:[
        {
            id: 0,
            name: <>Training app<br />(in maintenance)</>,
            description: <>
                Page developed with React and Laravel. Use Redux for vertical prop management.
                <br /><br />
                You can create a user and start customizing your exercises completely free. Access from the mobile anywhere.
            </>,
            external_link: 'https://entrenamiento-app.herokuapp.com/',
            github_link: 'https://github.com/franpax95/Entrenamiento',
            images: [
                '/img/entrenamiento/img0.jpg',
                '/img/entrenamiento/img1.jpg',
                '/img/entrenamiento/img2.jpg',
                '/img/entrenamiento/img3.jpg',
                '/img/entrenamiento/img4.jpg',
                '/img/entrenamiento/img5.jpg',
                '/img/entrenamiento/img6.jpg'
            ]
        },
        {
            id: 1,
            name: 'Joe Williams portfolio',
            description: <>
                Page developed with React and Laravel. Use Redux.
                <br /><br />
                Personal portfolio of Joe Williams, graphic designer. <br />
                Made in collaboration with <b> @ DMM161 </b>.
            </>,
            external_link: 'https://joewilliams.herokuapp.com/',
            github_link: 'https://github.com/franpax95/JoeWilliamsWeb',
            images: [
                '/img/joewilliams/img0.jpg',
                '/img/joewilliams/img1.jpg',
                '/img/joewilliams/img2.jpg',
                '/img/joewilliams/img3.jpg',
                '/img/joewilliams/img4.jpg',
                '/img/joewilliams/img5.jpg',
                '/img/joewilliams/img6.jpg',
                '/img/joewilliams/img7.jpg'
            ]
        },
        {
            id: 2,
            name: 'Autoescuela Las Lagunas',
            description: <>
                Page developed with React, <i> react-springs </i> for transition between routes.
                <br /><br />
                Las Lagunas Driving School Page (<i> now Servial Driving School </i>). Available in Spanish and English.
            </>,
            external_link: 'https://aelaslagunas.franpax95.vercel.app/',
            github_link: 'https://github.com/franpax95/aelaslagunas',
            images: [
                '/img/aelaslagunas/img0.jpg',
                '/img/aelaslagunas/img1.jpg',
                '/img/aelaslagunas/img2.jpg',
                '/img/aelaslagunas/img3.jpg',
                '/img/aelaslagunas/img4.jpg',
                '/img/aelaslagunas/img5.jpg'
            ]
        },
        {
            id: 3,
            name: 'Petgram',
            description: <>
                Application developed with React. Use <i> GraphQL </i> to request an api made with <i> Express </i>.
                <br /><br />
                Platzi <i> React Advanced </i> tutorial. Upload and share photos of pets.
            </>,
            external_link: 'https://curso-platzi-react-avanzado.franpax95.now.sh/',
            github_link: 'https://github.com/franpax95/Curso-Platzi-React-Avanzado',
            images: [
                '/img/petgram/img0.jpg',
                '/img/petgram/img1.jpg',
                '/img/petgram/img2.jpg',
                '/img/petgram/img3.jpg',
                '/img/petgram/img4.jpg'
            ]
        }
    ]
};



const engTexts = {
    Navbar, Home, About, Projects
}

export default engTexts;