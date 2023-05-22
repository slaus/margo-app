import React from 'react';
import { Link } from "react-scroll";
import {Scene} from "./index";

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <>
            <footer id="footer-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center pb-4">
                            <p><Link to="home">ProPINterest</Link> &copy; 2022 - {getCurrentYear()}. Все права защищены.</p>
                            <p>Программный код <a href="https://site404.in.ua" target="_blank">Site404</a>.</p>
                        </div>
                    </div>
                </div>
            </footer>

            <Scene/>
        </>
    );
};

export default Footer;
