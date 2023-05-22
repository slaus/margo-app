import React from 'react';
import axios from "axios";
import {Button} from "./index";

const ContactForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        await axios.post("./submit-form.php", { name, email, message });

        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} id="formcontact">
            <div className="form-group row formwrap">
                <div className="col-lg-6 pt-5">
                    <label htmlFor="name">Напишите Ваше имя</label>
                    <input type="text" id="name" placeholder="Ваше имя" name="name" className="mt-3 input-control inputtext" required />
                </div>
                <div className="col-lg-6 pt-5">
                    <label htmlFor="email">Напишите Ваш e-mail</label>
                    <input type="email" id="email" placeholder="Ваш e-mail адрес" name="email" className="mt-3 input-control inputtext" required />
                </div>
                <div className="col-lg-12 pt-5">
                    <label htmlFor="message">Напишите Ваше сообщение</label>
                    <textarea className="comentarea mt-3 input-control" id="message" placeholder="Ваше сообщение" name="message" required  />
                    <Button className="submitbuton mt-5 mb-3" type="submit">
                        Отправить сейчас
                    </Button>
                    <div id="alert" className="contactform__loader pt-3"></div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
