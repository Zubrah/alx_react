import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import styles from './CourseList.module.css';

const CourseList = ({ listCourses }) => {
    return (
        <table id="CourseList" className={styles.courseList}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
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
