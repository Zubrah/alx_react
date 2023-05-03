import React from 'react';
import styles from './BodySection.module.css';

const BodySection = ({ title, children }) => {
    return (
        <div className={styles.bodySection}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default BodySection;
