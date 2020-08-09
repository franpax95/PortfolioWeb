import React, { useState } from 'react';
import './Contact.css';

import axios from 'axios';
import { useLanguage } from '../../hooks/useLanguage';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';


const Contact = (props) => {
    /** lang hook */
    const [texts, setLang] = useLanguage();
    const { Contact: txt } = texts;

    /** form inputs */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    /** axios inputs */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const validate = () => {
        if(!name.length){
            alert(txt.validate.name);
            return false;
        }
        if(!email.length){
            alert(txt.validate.email);
            return false;
        }
        if(!message.length){
            alert(txt.validate.message);
            return false;
        }

        return true;
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const ok = validate();
        if(ok){
            setLoading(true);
            try{
                const formData = { name, email, message };
                await axios.post('/api/contact', formData);
                setLoading(false);
                alert(txt.success);
            }catch(error){ setError(error); }
        }
    }

    return (
        <Layout 
            className = "Contact"
            title = {txt.title}
            subtitle = {txt.subtitle}
            headerSrc = '/img/contact/header.jpg'
            footerSrc = '/img/contact/footer.jpg'
        >
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} placeholder={txt.input.name} autoComplete='off' />
                    <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder={txt.input.email} autoComplete='off' />
                </div>

                <textarea name='message' value={message} onChange={e => setMessage(e.target.value)} placeholder={txt.input.message}></textarea>

                {error && <div className="error">{txt.error}</div>}

                {loading
                    ? <Spinner />
                    : <Button>Enviar</Button>
                }
            </form>
        </Layout>
    );
}

export default Contact;