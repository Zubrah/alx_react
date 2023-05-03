import React from 'react';
import PropTypes from 'prop-types';
import styles from './CourseList.module.css';

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
    const cell = isHeader ? (
        <th className={styles.cell} colSpan="2" style={{ backgroundColor: '#deb5b545' }}>
            {textFirstCell}
        </th>
    ) : (
        <>
            <td className={styles.cell} style={{ backgroundColor: '#f5f5f5ab' }}>{textFirstCell}</td>
            <td className={styles.cell} style={{ backgroundColor: '#f5f5f5ab' }}>{textSecondCell}</td>
        </>
    );

    return <tr className={isHeader ? styles.headerRow : styles.row} style={{ backgroundColor: '#f5f5f5ab' }}>{cell}</tr>;
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
