import React from 'react';
import PropTypes from 'prop-types';
import styles from './CourseList.module.css';

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
    const cell = isHeader ? (
        <th className={styles.cell} colSpan="2">
            {textFirstCell}
        </th>
    ) : (
        <>
            <td className={styles.cell}>{textFirstCell}</td>
            <td className={styles.cell}>{textSecondCell}</td>
        </>
    );

    return <tr className={isHeader ? styles.headerRow : styles.row}>{cell}</tr>;
};

CourseListRow.propTypes = {
    textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isHeader: PropTypes.bool.isRequired,
};

CourseListRow.defaultProps = {
    textSecondCell: '',
};

export default CourseListRow;
