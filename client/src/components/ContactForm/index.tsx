import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { EmailJsInfo } from '../../models/enum';
import './style.scss';


export const ContactForm: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        phone_number: '',
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
        setLoading(true);

        if (form.current) {
            emailjs
                .sendForm(EmailJsInfo.Service_id, EmailJsInfo.Template_id, form.current, EmailJsInfo.Acc_public_key)
                .then(
                    () => {

                        setFormData({
                            user_name: '',
                            user_email: '',
                            phone_number: '',
                            message: ''
                        });
                        alert("Mesajul a fost trimis!");
                    }
                )
                .finally(() => {
                    setLoading(false);
                });

        }
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Nume</label>
                <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
                <label>Număr de telefon</label>
                <input type="phoneNumber" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                <label>Mesaj</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
                <input type="submit" value="Send" disabled={loading}/>
            </form>
            {loading && <p className="suspense-text">Se trimite mesajul...</p>}
            
        </>
    );
};