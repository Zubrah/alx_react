import { Map } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
    it('should return the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual(
            Map({
                courses: {},
                selectedCourse: null,
            })
        );
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const data = [
            {
                id: 1,
                name: 'Course 1',
            },
            {
                id: 2,
                name: 'Course 2',
            },
            {
                id: 3,
                name: 'Course 3',
            },
        ];

        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: data,
        };

        const normalizedCourses = {
            entities: {
                courses: {
                    1: {
                        id: 1,
                        name: 'Course 1',
                    },
                    2: {
                        id: 2,
                        name: 'Course 2',
                    },
                    3: {
                        id: 3,
                        name: 'Course 3',
                    },
                },
            },
        };

        const expectedState = Map({
            courses: normalizedCourses.entities.courses,
            selectedCourse: null,
        });

        expect(courseReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle SELECT_COURSE', () => {
        const initialCourses = Map({
            courses: {
                1: {
                    id: 1,
                    isSelected: false,
                    name: 'Course 1',
                },
                2: {
                    id: 2,
                    isSelected: false,
                    name: 'Course 2',
                },
                3: {
                    id: 3,
                    isSelected: false,
                    name: 'Course 3',
                },
            },
            selectedCourse: null,
        });

        const action = {
            type: SELECT_COURSE,
            index: 2,
        };

        const expectedState = initialCourses.setIn(['courses', '2', 'isSelected'], true);

        expect(courseReducer(initialCourses, action)).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialCourses = Map({
            courses: {
                1: {
                    id: 1,
                    isSelected: false,
                    name: 'Course 1',
                },
                2: {
                    id: 2,
                    isSelected: true,
                    name: 'Course 2',
                },
                3: {
                    id: 3,
                    isSelected: false,
                    name: 'Course 3',
                },
            },
            selectedCourse: null,
        });

        const action = {
            type: UNSELECT_COURSE,
            index: 2,
        };

        const expectedState = initialCourses.setIn(['courses', '2', 'isSelected'], false);

        expect(courseReducer(initialCourses, action)).toEqual(expectedState);
    });
});
