import React from 'react';

import {NavItem} from "./index";
import AppContext from "../context/AppContext";

const Navmobile = () => {
    const {navbar, isOpenMenu} = React.useContext(AppContext);

    return (
        <div className={`mobile-navwrap ${isOpenMenu ? "showmenu" : ""}`}>
            <nav id="navmobile">
                <ul className="navigation-listmobile">
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
        </div>
    );
};

export default Navmobile;
