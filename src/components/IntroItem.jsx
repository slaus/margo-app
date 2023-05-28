import React from 'react';
import {Animate} from "../animation";

const IntroItem = ({id, icon, title, description}) => {

    return (
        <Animate delay={200*id} className="item-porto">
            <div className="wrap-box">
                <div className="icon mb-3">
                    <i className={`bi ${icon}`}></i>
                </div>
                {/*<h3>{title}</h3>*/}
                <p className="mt-3">{description}</p>
            </div>
        </Animate>
    );
};

export default IntroItem;
