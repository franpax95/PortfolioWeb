import React, { useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../../hooks/useLanguage';

import { MdClose } from "react-icons/md";

import './EmailModal.css';

const EmailModal = ({ onClickOutside }) => {
    const [texts, setLang] = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        body: ''
    });

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const sendEmail = () => {
        console.log(formData);
        try{
            axios.post('/api/contact', formData);
            console.log('Email enviado');
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="EmailModal" onClick={onClickOutside}>
            <div className="form" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClickOutside}>
                    <MdClose />
                </button>

                <h1>{texts.Email.title}</h1>

                <div>
                    <label>{texts.Email.name}</label>
                    <input type="text" name="name" onChange={onChange} value={formData.name} />
                </div>

                <div>
                    <label>{texts.Email.email}</label>
                    <input type="email" name="email" onChange={onChange} value={formData.email} />
                </div>

                <div>
                    <label>{texts.Email.subject}</label>
                    <input type="text" name="subject" onChange={onChange} value={formData.subject} />
                </div>

                <div>
                    <label>{texts.Email.body}</label>
                    <textarea name="body" onChange={onChange} value={formData.body}></textarea>
                </div>

                <button onClick={() => sendEmail()}>{texts.Email.submit}</button>
            </div>
        </div>
    );
}

export default EmailModal;