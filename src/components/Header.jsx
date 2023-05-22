import React from 'react';
import {Link} from "react-scroll";

import AppContext from "../context/AppContext";

const Header = () => {
    const {isOpenMenu, setIsOpenMenu, lockBody} = React.useContext(AppContext);

    const openMenu = () => {
        setIsOpenMenu(true);
        lockBody(true);
    }

    const closeMenu = () => {
        setIsOpenMenu(false);
        lockBody(false);
    }

    return (<header id="wrap-header" className="pt-3">
            <div className="container pl-lg-0">
                <div className="row position-relative">
                    <div className="col-lg-12">
                        <div className="wrap-logo">
                            <Link className="navbar-brand" to="home">
                                <span className="d-inline">ProPINterest</span>
                            </Link>
                            <div className="wrap-menunavigation">
                                <div
                                    className={`wrap-close ${isOpenMenu ? "show" : ""}`}
                                    onClick={closeMenu}
                                >
                                    <div id="exitmenu"></div>
                                </div>
                                <div
                                    className={`menu-bar ${isOpenMenu ? "hide" : ""}`}
                                    onClick={openMenu}
                                >
                                    <span className="lines"></span>
                                    <span className="lines"></span>
                                    <span className="lines"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
};

export default Header;
