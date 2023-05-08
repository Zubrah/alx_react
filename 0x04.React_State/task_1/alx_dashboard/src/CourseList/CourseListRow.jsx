import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#f5f5f5ab',
    },
    headerRow: {
        backgroundColor: '#deb5b545',
    },
    th: {
        backgroundColor: '#deb5b545',
        padding: '0.5rem',
        textAlign: 'left',
        border: '1px solid #ccc',
    },
    td: {
        padding: '0.5rem',
        textAlign: 'left',
        border: '0.5px solid #ccc',
    },
});

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
    const cell = isHeader ? (
        <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
        </>
    ) : (
        <>
            <td className={css(styles.td)}>{textFirstCell}</td>
            <td className={css(styles.td)}>{textSecondCell}</td>
        </>
    );

    return <tr className={isHeader ? css(styles.headerRow) : css(styles.row)}>{cell}</tr>;
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
