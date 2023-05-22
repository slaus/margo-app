import React from 'react';

import AppContext from "../context/AppContext";

import { Link } from "react-scroll";

const NavItem = ({page, link}) => {
    const {lockBody, setIsOpenMenu} = React.useContext(AppContext);
    const clickItem = () => {
        setIsOpenMenu(false);
        lockBody(false);
    }

    return (
        <li>
            <Link className="nav-link" spy to={link} onClick={clickItem}>
                {page}
            </Link>
        </li>
    );
};

export default NavItem;
