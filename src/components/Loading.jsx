import React from 'react';

const Loading = () => {

    return (
        <div className="loading">
            <div className="box">
                <div className="img-load">Загрузка...</div>
                <div className="progress">
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
