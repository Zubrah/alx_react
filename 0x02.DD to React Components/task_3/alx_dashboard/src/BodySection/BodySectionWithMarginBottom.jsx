import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import styles from './BodySection.module.css';

const BodySectionWithMarginBottom = (props) => {
    const { title, children } = props;
    return (
        <div className={styles.bodySectionWithMargin}>
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