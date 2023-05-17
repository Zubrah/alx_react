import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
//import styles from './BodySection.module.css';
import { StyleSheet, css } from 'aphrodite';


//Aphrodite Implementation
const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '10px',


    },
})


const BodySectionWithMarginBottom = (props) => {
    const { title, children } = props;
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
}


BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default BodySectionWithMarginBottom