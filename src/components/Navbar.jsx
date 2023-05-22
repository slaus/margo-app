import React from 'react';

import {NavItem} from "./index";

import AppContext from "../context/AppContext";

const Navbar = () => {
    const {navbar} = React.useContext(AppContext);

    return (
        <nav id="navbar" className="navigation-nav">
            <ul className="menlist">
                <>
                    {
                        navbar &&
                        navbar.map(item => (
                            <NavItem key={item.id} {...item}/>
                        ))
                    }
                </>
            </ul>
        </nav>
    );
};

export default Navbar;
