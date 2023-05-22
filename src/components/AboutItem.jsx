import React from 'react';
import {Animate} from "../animation";

const AboutItem = ({id, description}) => {

    return (
        <Animate Tag="p" delay={id*200+200}>{description}</Animate>
    );
};

export default AboutItem;
