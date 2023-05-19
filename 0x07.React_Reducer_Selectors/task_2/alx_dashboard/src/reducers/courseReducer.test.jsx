// courseReducer.test.js
import courseReducer from './courseReducer';
import {
    selectCourse,
    unSelectCourse,
    fetchCourseSuccess,
    SELECT_COURSE,
    UNSELECT_COURSE,
    FETCH_COURSE_SUCCESS
} from '../actions/courseActionCreators';

describe('courseReducer', () => {
    it('should return the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const data = [
            {
                id: 1,
                name: "ES6",
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                credit: 20
            },
            {
                id: 3,
                name: "React",
                credit: 40
            }
        ];

        const expectedState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        expect(courseReducer([], fetchCourseSuccess(data))).toEqual(expectedState);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const expectedState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: true,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const action = selectCourse(1);
        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: true,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const expectedState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        const action = unSelectCourse(1);
        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });
});
