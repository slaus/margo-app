import React from 'react';

const TestimonialItem = ({name, position, avatar, description}) => {

    return (
        <div className="item-testi">
            <div className="wrap-comment">
                <blockquote>
                    <i className="fa fa-quote-left left-o" aria-hidden="true"></i>
                    <h3 className="text-center"><b>{name}</b></h3>
                    <p>{description}</p>
                </blockquote>
            </div>
        </div>
    );
};

export default TestimonialItem;
