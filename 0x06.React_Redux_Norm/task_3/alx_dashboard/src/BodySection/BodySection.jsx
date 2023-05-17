import React from 'react';
//import styles from './BodySection.module.css';
import { StyleSheet, css } from 'aphrodite';

//Aphrodite Implementation
const styles = StyleSheet.create({
    bodySection: {
        marginBottom: '10px',
        marginLeft: '10px',
    }
})

const BodySection = ({ title, children }) => {
    return (
        <div className={css(styles.bodySection)}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default BodySection;
