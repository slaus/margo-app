import React from 'react';
import axios from "axios";
import {Button} from "./index";

const ContactForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isSent, setIsSent] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('message', message);

        axios.post('/feedback.php', data)
            .then(response => {
                console.log(response.data);
                // Очищаем состояние формы
                setName('');
                setEmail('');
                setMessage('');
                setIsSent(true);
                setTimeout(() => {
                    setIsSent(false);
                }, 5000);
            })
            .catch(error => {
                alert("Что-то пошло не так!");
                console.log(error);
            });

    };

    return (
        <form onSubmit={handleSubmit} id="formcontact">
            <div className="form-group row formwrap">
                <div className="col-lg-6 pt-5">
                    <label htmlFor="name">Напишите Ваше имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Ваше имя"
                        className="mt-3 input-control inputtext"
                        required />
                </div>
                <div className="col-lg-6 pt-5">
                    <label htmlFor="email">Напишите Ваш e-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Ваш e-mail адрес"
                        className="mt-3 input-control inputtext"
                        required />
                </div>
                <div className="col-lg-12 pt-5">
                    <label htmlFor="message">Напишите Ваше сообщение</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        className="comentarea mt-3 input-control"
                        placeholder="Ваше сообщение"
                        required  />
                    <Button className="submitbuton mt-5 mb-3" type="submit">
                        Отправить сейчас
                    </Button>
                    {isSent && <div id="alert" className="contactform__loader pt-3 text-center">Сообщение отправлено!</div>}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
