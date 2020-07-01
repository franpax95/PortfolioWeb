import React from 'react';

export const Navbar = {
    home: 'Home',
    develop: 'Web Development',
    projects: 'Projects'
};

export const Home = {
    title: { prev: '¡Bienvenido al portfolio de', post: 'Francisco Javier Navarro García!' },
    subtitle: 'Desarrollador web junior',
    description: <>Desarrollo <b>web</b></>
}

export const Develop = {
    title: <>¡Bienvenido al portfolio de<br /><i>Francisco Javier Navarro García</i>!</>,
    subtitle: 'Desarrollador web junior',
    descriptions: [
        <>
            Tengo 24 años y soy estudiante de Ingeniería Telemática en la UMA, aunque mi verdadera pasión es el <b>desarrollo web</b>.
            <br /><br />
            Soy un enamorado de estas tecnologías desde que las descubrí en la carrera. Estoy seguro de haber encontrado mi <b>vocación</b> y estoy totalmente decidido a trabajar en lo que me gusta.
        </>,
        <>
            En lo que respecta al desarrollo web y la programación, tengo los conocimientos más básicos adquiridos en la carrera, es decir, HTML, CSS, JavaScript y PHP.
            También empecé en el <i>framework</i> <b>CodeIgniter</b>, para posteriormente aprender <b>Laravel</b> o librerías como <b>React.js</b> por mi cuenta.
        </>,
        <>
            De hecho, mis tecnologías favoritas son las dos últimas, React y Laravel. <br /><br />
            En cuanto a <b>React.js</b>, he programado con componentes de clase y componentes funcionales, decantándome normalmente por la segunda opción.
            Por supuesto, he trabajado con <i>Hooks</i>.
            He programado diferentes aplicaciones usando diferentes <i>packages</i>, por ejemplo, <i>React-Router, React-Spring, React-Helmet...</i>
            También manejando props de manera "vertical" con <b>Redux</b> y <b>Context</b>.
            <br /><br />
            Mi experiencia con <b>Laravel</b> es más limitada. <i>Autenticación de usuarios</i>, manejo de <b>ELOQUENT</b>, conexión con <b>MySQL</b> y manejo de APIs con <b>passport</b> para el Token 
            son algunas de las cosas que he hecho con él. Mi intención e ilusión es ser un buen desarrollador <i>Full-Stack</i> capaz de gestionar y crear grandes páginas web.
        </>,
        <>
            De mi experiencia con el desarrollo web, podemos hablar de
            <ul>
                <li>alrededor de 4 años de experiencia en <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> y <b>PHP</b>.</li>
                <li>alrededor de 3 años de experiencia en el uso de <b>CodeIgniter</b>.</li>
                <li>alrededor de 1 año de experiencia en el uso de <b>React.js</b>.</li>
                <li>alrededor de 1 año de experiencia en el uso de <b>Laravel</b>.</li>
                <li>uso de <b>JQuery</b> y <b>AJAX</b>.</li>
                <li>uso de <b>MySQL</b>.</li>
                <li>uso de <b>Redux</b>.</li>
            </ul>
            <br />
            Además, en la carrera he tocado muchos otros lenguajes de programación
            <ul>
                <li>alrededor de 5 años desde que aprendí <b>C</b> y <b>C++</b>.</li>
                <li>alrededor de 3 años programando en <b>JAVA</b>.</li>
                <li><b>Arduino</b> para programar <b>IoT</b>.</li>
                <li><b>AndroidStudio</b> (Java).</li>
                <li><b>Python</b>.</li>
            </ul>
        </>
    ]
};

const engTexts = {
    Navbar, Home, Develop
}

export default engTexts;