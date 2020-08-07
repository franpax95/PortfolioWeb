import React, { useState } from 'react';
import './Contact.css';

import { useLanguage } from '../../hooks/useLanguage';

import Footer from '../../components/Footer';
import Title, { SubTitle } from '../../components/Title';
import { LargeImage } from '../../components/Image';
import Button from '../../components/Button';


const Contact = (props) => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const save = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }

    const { Contact: txt } = texts;
    return (
        <div className="Contact">
            <Title color='#4d4d4d'>{txt.title}</Title>
            <SubTitle color='#666666'>{txt.subtitle}</SubTitle>

            <hr style={{ 
                width: '10%',
                margin: '5vh 0 10vh 0',
                border: 'none', 
                borderTop: 'solid 1.5px gray' 
            }} />

            <LargeImage height='40vh' width='80%' src='/img/contact/header.jpg' alt="" placeholder={false} />

            <form className="form" onSubmit={save}>
                <div className="form-group">
                    <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} placeholder={txt.input.name} autoComplete='off' />
                    <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder={txt.input.email} autoComplete='off' />
                </div>

                <textarea name='message' value={message} onChange={e => setMessage(e.target.value)} placeholder={txt.input.message}></textarea>
            
                <Button>Enviar</Button>
            </form>

            <Footer src='/img/hyperbolic/home_section_3_dark.jpg' />
        </div>
    );
}

export default Contact;