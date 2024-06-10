import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import './style.scss';
import { EmailJsInfo } from '../../models/enum';

export const ContactForm: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(EmailJsInfo.Service_id, EmailJsInfo.Template_id, form.current, EmailJsInfo.Acc_public_key)
                .then(
                    (result: EmailJSResponseStatus) => {
                        console.log('SUCCESS!', result.text);
                        setFormData({
                            user_name: '',
                            user_email: '',
                            message: ''
                        });
                        alert("Mesajul a fost trimis!");
                    }
                );
        }
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Nume</label>
                <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
                <label>Mesaj</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
                <input type="submit" value="Send" />
            </form>
        </>
    );
};