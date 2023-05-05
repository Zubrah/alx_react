import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
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
        backgroundColor: '#eee',
        padding: '0.5rem',
        textAlign: 'left',
        border: '1px solid #ccc',
    },
    courseListThTd: {
        padding: '0.5rem',
        textAlign: 'right',
        border: '1px solid #ccc',
    },
});

const CourseList = ({ listCourses }) => {
    return (
        <table id="CourseList" className={css(styles.courseList)}>
            <thead className={css(styles.courseListTh)}>
                <CourseListRow
                    textFirstCell="Available courses"
                    textSecondCell=""
                    isHeader={true}
                />
                <CourseListRow
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                    isHeader={true}
                />
            </thead>
            <tbody>
                {listCourses.length === 0 && (
                    <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                )}
                {listCourses.map(course => (
                    <CourseListRow
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit}
                        isHeader={false}
                    />
                ))}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired,
        })
    ),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;
