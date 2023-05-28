import React from 'react';
import {Animate} from "../animation";
import {ContactForm} from "../components";

const ContactPage = () => {

    const emailAddress = "GuruPinterestGAVyandexDDOTru";
    const clickOnEmail = (e) => {
        return e.target.href = e.target.href.replace(/GAV/,'@').replace(/DDOT/,'.').toLowerCase();
    }

    return (
        <section id="contact" className="sect section6" data-section-name="contact-section">
            <div className="container wrap-container">
                <span className="big-text">Контакты</span>
                <div className="row justify-content-center pb-5 mb-5">
                    <div className="col-lg-8">
                        <div className="who-i text-center">
                            <Animate Tag="h3">Обратная <span className="boldi ml-2">Связь</span></Animate>
                            <Animate Tag="p" delay={400}>
                                Вы можете всегда написать мне письмо и я Вам обязательно отвечу
                            </Animate>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 mb-5">
                        <div className="wrap-detailcontact">
                            <p className="mb-5">
                                Отправляя письмо с сайта, Вы даете согласие на автоматическую обработку ваших персональных данных, согласно Федеральному <a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD_%C2%AB%D0%9E_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%C2%BB" target="_blank" className="email">закону</a> «О персональных данных».
                            </p>
                            <div className="detail-inner">
                                <i className="bi bi-phone"></i>
                                <h4>Мой номер телефона</h4>
                                <p>
                                    <a href="tel:+79775974717" className="email">+7 (977) 597-47-17</a>
                                </p>
                            </div>
                            <div className="detail-inner">
                                <i className="bi bi-envelope"></i>
                                <h4>Email адрес сайта</h4>
                                <p>
                                    <a href={`mailto:${emailAddress}`} onClick={clickOnEmail} className="email">{`GuruPinterest {at} yandex.ru`}
                                    </a>
                                </p>
                            </div>
                            <div className="detail-inner">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Адрес локации</h4>
                                <p>Российская Федерация, г. Подольск</p>
                            </div>
                            <div className="sosmed-horizontal pt-3">
                                <a href="https://youtube.com/@mama_manicura" target="_blank">
                                    <i className="fa fa-youtube"></i>
                                </a>
                                <a href="https://pin.it/5dF9DxC" target="_blank">
                                    <i className="fa fa-pinterest-p"></i>
                                </a>
                                <a href="https://instagram.com/mama_manicura?igshid=YmMyMTA2M2Y=" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="https://pin.it/9jQYgT0" target="_blank">
                                    <i className="fa fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="form-contact">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
