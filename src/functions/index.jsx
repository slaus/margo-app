import React from 'react';

export const loadingRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
}

export const lockBody = (param) => {
    param ? document.body.classList.add("open-modal") : document.body.classList.remove("open-modal");
}

export const getDate = (date) => {
    let getDate = new Date(date * 1000),
        getDay = getDate.getDate().toString().padStart(2, '0'),
        getMonth = (getDate.getMonth() + 1).toString().padStart(2, '0'),
        getYear = getDate.getFullYear().toString().substr(-2);
    return `${getDay}/${getMonth}/${getYear}`;
};

