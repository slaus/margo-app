import React from 'react';
import styles from '../css/loading.module.css';

const Loading = () => {

    return (
        <div className={styles.loading}>
            <div className={styles.box}>
                <div className={styles.imgLoad}>Загрузка...</div>
                <div className={styles.progress}>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
