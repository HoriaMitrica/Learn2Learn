import { ContactForm } from '../ContactForm'
import './style.scss'

export const Contact = () => {
    return (
        <>
            <section id="contact" className="main">

                <div className="section-end">

                    <div>
                        <h1 className="title-smaller main contact-text">C o n t a c t</h1>
                        <ContactForm />
                    </div>
                    <div className=" main contact-text">
                        <div className="contact-left">
                            <div style={{ fontSize: "x-large" }}>
                                <div>📍 Strada Ticuș 12, Sector 3, zona Sălăjan</div>
                                <div>✉️ learn2learncontact@gmail.com</div>
                                <div>📞 0728939560</div>
                                <div>📞 0733650493</div>
                            </div>
                        </div>
                        <div className="contact-right">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d356.2602258699987!2d26.162779!3d44.410967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffac74eba987%3A0xdc75082d1b5ae80b!2sLearn2Learn%20Education%20Center!5e0!3m2!1sen!2sro!4v1717754624972!5m2!1sen!2sro"
                                width='100%'
                                height='100%'
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <h2 className="contact-us">
                        <a href="https://cleancode.ro/" target="_blank">Powered by www.cleancode.ro 2024, Bucharest, Romania</a>
                    </h2>

                </div>
            </section>
        </>
    )
}