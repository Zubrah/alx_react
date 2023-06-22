import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = {
    courses: {},
    selectedCourse: null,
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedCourses = coursesNormalizer(action.data);
            return {
                ...state,
                courses: {
                    ...state.courses,
                    ...normalizedCourses.toJS(), // Convert to plain JavaScript object
                },
            };
        case SELECT_COURSE:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    [action.index.toString()]: {
                        ...state.courses[action.index.toString()],
                        isSelected: true,
                    },
                },
            };
        case UNSELECT_COURSE:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    [action.index.toString()]: {
                        ...state.courses[action.index.toString()],
                        isSelected: false,
                    },
                },
            };
        default:
            return state;
    }
};

export default courseReducer;
