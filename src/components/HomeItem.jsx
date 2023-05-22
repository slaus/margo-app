import React from 'react';
import {Animate} from "../animation";

const HomeItem = ({description}) => {

    return (
        <Animate Tag="p" delay={600} className="deskrip-info">{description}</Animate>
    );
};

export default HomeItem;
