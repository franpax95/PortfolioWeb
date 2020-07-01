import React from 'react';



export const Navbar = {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Mis trabajos'
};



export const Home = {
    title: '¿Buscas un desarrollador web?',
    subtitle: 'Soy un desarrollador web y programador de Fuengirola, Málaga. \n Creo aplicaciones web, normalmente con React.',
    emailbtn: 'Envíame un email',
    article: <>
        ¡Bienvenido al portfolio de <i>Francisco Javier Navarro García</i>! <br />
        Si necesitas de una página web, no dudes en contactar conmigo para cualquier pregunta o consulta.
        Sin compromiso, soy un humilde programador. 
        <br /><br />
        Creo páginas <b>bonitas</b> y <b>funcionales</b> para pequeños negocios. Puedes echar un vistazo en la pestaña de <b>Mis trabajos</b>.<br />
        ¿Tienes clara tu idea de negocio? ¡Juntos podremos plasmarla sobre la web!
        <br /><br />
        <span style={{fontSize: '1.1em'}}><b>Email</b>: fcojnavarrowork@gmail.com </span>
        <br />
        <b>Teléfono</b>: 697 883 410
    </>
};



export const About = {
    title: '¡Hola! Soy Francisco',
    subtitle: <>Desarrollador web FullStack,<br />apasionado de los diseños responsivos</>,
    lasttitle: 'Bienvenido a mi portfolio personal. Espero que su diseño y contenido sean de tu agrado y, sobretodo, que encuentres lo que has venido a buscar :)',
    articles: [
        <>
            A pesar de ser un desarrollador web, he cursado varios años de la carrera de Ingeniería Telemática en la UMA. Allí descubrí este sector y enseguida me
            enamoré y apasioné por él. Mi objetivo es ser un programador <i>FullStack</i> completo y capaz.
        </>,
        <>
            En el caso del <b>Front-End</b>, mi tecnología/librería favorita es <b>React.js</b>. Además, es en la que más he desarrollado y más lejos he llegado en los últimos años.
            Realmente me gusta programar con React. <br /> Para los más entendidos, me encanta programar <i>componentes funcionales</i>. Tanto proyecto, como código quedan bien estructurados y limpios.
            <br /><b>Redux</b>, <i>Context</i>, <i>Hooks</i>, <i>React-Router</i>, <i>React-Springs</i>... son algunas de las herramientas que utilizo a la hora de programar.
        </>,
        <>
            Para el <b>Back-End</b>, suelo utilizar <b>Laravel</b> como <i>framework</i>, pero también he programado con <b>CodeIgniter</b>. <br />Manejo de <b>bases de datos</b>, <b>gestión
             de usuarios</b> o <b>uso de APIs públicas y personalizadas</b> son algunas de las cosas que puedo hacer.
        </>
    ],
    techs: {
        title: 'Resumen de las tecnologías más importantes que uso',
        list: [
            <>más de 4 años de experiencia en <b>HTML</b>, <b>CSS</b>, <b>JavaScript (<i>ECMA6</i>)</b> y <b>PHP</b>.</>,
            <>más de 2 años de experiencia con <b>React.js</b></>,
            <>más de 2 años de experiencia en el uso de <b>CodeIgniter</b></>,
            <>alrededor de 1 año de experiencia usando <b>Laravel</b></>,
            <>uso de bases de datos relacionales: <b>MySQL</b>, <b>SQLite</b>, <b>PostgreSQL</b>...</>,
            <>uso de <b>Node.js</b> y <b>Webpack</b>.</>
        ]
    },
    otherTechs: {
        title: 'Otras tecnologías que he utilizado',
        list: [
            <>uso de <b>JQuery</b> y <b>GraphQL</b></>,
            <>más de 4 años programando <b>JAVA</b> en la carrera, sobretodo enfocado en Telecomunicaciones (<i>sockets, servlets...</i>)</>,
            <>más de 5 años programando <b>C</b> en la carrera.</>,
            <>experiencia con <b>C++</b></>,
            <>experiencia programando <b>IoT</b>, concretamente <i>Arduino con JavaScript</i>.</>,
            <>experiencia con <b>AndroidStudio</b> en <i>JAVA</i>.</>
        ]
    }
};



export const Projects = {
    title: 'Mis proyectos',
    projects:[
        {
            id: 0,
            name: <>Entrenamiento<br />(en mantenimiento)</>,
            description: <>
                Página desarrollada con React y Laravel. Usa Redux para la gestión vertical de las props.
                <br /><br />
                Puedes crearte un usuario y empezar a personalizar tus ejercicios completamente gratis. Accede desde el móvil en cualquier parte.
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
                Página desarrollada con React y Laravel. Usa Redux.
                <br /><br />
                Portfolio personal de Joe Williams, diseñador gráfico. <br />
                Hecha en colaboración con <b>@DMM161</b>.
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
                Página desarrollada con React, <i>react-springs</i> para transición entre rutas.
                <br /><br />
                Página de Autoescuela Las Lagunas (<i>ahora Autoescuela Servial</i>). Disponible en Español e Inglés.
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
                Aplicación desarrollada con React. Utiliza <i>GraphQL</i> para peticiones a una api hecha con <i>Express</i>.
                <br /><br />
                Tutorial Platzi <i>React Avanzado</i>. Sube y comparte fotos de mascotas.
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



const espTexts = {
    Navbar, Home, About, Projects
}

export default espTexts;