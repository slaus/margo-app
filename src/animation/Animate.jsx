import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = ({children, className, Tag, animation, delay, duration, offset, easing, anchor, ...attrs}) => {
    React.useEffect(() => {
        AOS.init();
    }, [])

    const classes = classNames(
        className,
        'aos-init aos-animate'
    );

    return (
        <>
            {
                children ?
                    <Tag
                        className={classes}
                        data-aos={animation}
                        // data-aos-delay={delay}
                        data-aos-duration={duration}
                        data-aos-offset={offset}
                        data-aos-easing={easing}
                        data-aos-anchor-placement={anchor}
                        {...attrs}
                    >{children}</Tag> :
                    <Tag
                        className={classes}
                        data-aos={animation}
                        // data-aos-delay={delay}
                        data-aos-duration={duration}
                        data-aos-offset={offset}
                        data-aos-easing={easing}
                        data-aos-anchor-placement={anchor}
                        {...attrs}
                    />
            }
        </>
    );
};

Animate.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    animation: PropTypes.oneOf(["fade-up", "fade-down", "fade-right", "fade-left", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left", "flip-left", "flip-right", "flip-up", "flip-down", "zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right", "zoom-out", "zoom-out-up", "zoom-out-down", "zoom-out-right", "zoom-out-left"]),
    easing: PropTypes.oneOf(["linear", "ease-in-sine", "ease-in-back", "ease-out-cubic"]),
    anchor: PropTypes.oneOf(["top-bottom", "center-bottom", "bottom-bottom", "top-center", "center-center", "bottom-center"]),
    delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    duration: PropTypes.number,
    offset: PropTypes.number,
    Tag: PropTypes.string,
};

Animate.defaultProps = {
    children: '',
    className: '',
    animation: 'fade-up',
    easing: null,
    anchor: null,
    delay: '200',
    duration: null,
    offset: null,
    Tag: 'div',
};

export default Animate;
