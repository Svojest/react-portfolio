import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-envelope contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">svojest@yandex.ru</span>

                            <a href="mailto:svojest@yandex.ru" className="contact__button">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>
                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">@svojest</span>

                            <a href="https://t.me/svojest" className="contact__button">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
