import React from 'react';
import PropTypes from 'prop-types';
//import styles from './CourseList.module.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    courseList: {
        width: '90%',
        borderCollapse: 'collapse',
        marginLeft: '50px',
        marginRight: '50px',
        marginTop: '70px',
    },
    courseListTh: {
        backgroundColor: '#deb5b545',
        padding: '0.5rem',
        textAlign: 'left',
        border: '1px solid #ccc',
    },
    courseListThTd: {
        padding: '0.5rem',
        textAlign: 'left',
        border: '0.5px solid #ccc',
    },
});

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
    const cell = isHeader ? (
        <>
            <th className={css(styles.courseListTh)}>
                {textFirstCell}</th>
            <th className={css(styles.courseListTh)}>
                {textSecondCell}</th>

        </>

    ) : (
        <>
            <td className={css(styles.courseListThTd)} style={{ backgroundColor: '#f5f5f5ab' }}>{textFirstCell}</td>
            <td className={css(styles.courseListThTd)} style={{ backgroundColor: '#f5f5f5ab' }}>{textSecondCell}</td>
        </>
    );

    return <tr className={isHeader ? css(styles.headerRow) : css(styles.row)} style={{ backgroundColor: '#f5f5f5ab' }}>{cell}</tr>;
};

CourseListRow.propTypes = {
    textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isHeader: PropTypes.bool.isRequired,
};

CourseListRow.defaultProps = {
    textSecondCell: '',
    textFirstCell: '',
};

export default CourseListRow;
