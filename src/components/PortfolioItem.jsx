import React from 'react';

import Tilt from 'react-parallax-tilt';
import {Animate} from "../animation";
import AppContext from "../context/AppContext";

const PortfolioItem = ({id, image, title, description}) => {
    const {setCurrentImageIndex, setClickedImg, setClickedImgAlt, lockBody} = React.useContext(AppContext);

    const handleClick = (id, image, title) => {
        setCurrentImageIndex(id);
        setClickedImg(`img/${image}`);
        setClickedImgAlt(title);
        lockBody(true);
    };

    return (
        <Animate delay={100 * id} className="item-porto gl">
            <a className="gallery-link glightbox"
               onClick={() => handleClick(id, image, title)}
            >
                <img src={`img/small-${image}`} alt={title}/>
                <Tilt scale={0.95} transitionSpeed={500} className="porto-description">
                    <div className="overlay-holder">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </Tilt>
            </a>
        </Animate>
    );
};

export default PortfolioItem;
