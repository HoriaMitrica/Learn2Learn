import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import './style.scss';
import { EmailJsInfo } from '../../models/enum';

export const ContactForm: React.FC = () => {

    const form = useRef<HTMLFormElement>(null); 

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(EmailJsInfo.Service_id, EmailJsInfo.Template_id, form.current, EmailJsInfo.Acc_public_key)
                .then(
                    (result: EmailJSResponseStatus) => {
                        console.log('SUCCESS!', result.text);
                    }
                );
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
        </form>
    );
};