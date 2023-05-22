import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {NavLink} from "react-router-dom";

const Button = ({
                    children,
                    onClick,
                    className,
                    disabled,
                    href,
                }) => {

    const buttonClasses = classNames(
        'btn button',
        className,
    );

    return (
        <>
            {href ?
                <NavLink
                    to={href}
                    className={buttonClasses}
                    disabled={disabled}
                    onClick={onClick}
                >
                    {children}
                </NavLink> :
                <button
                    className={buttonClasses}
                    disabled={disabled}
                    onClick={onClick}
                >
                    {children}
                </button>
            }
        </>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default Button',
    className: '',
    href: '',
    disabled: false,
};

export default Button;