import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({
    courses: {},
    selectedCourse: null,
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedCourses = coursesNormalizer(action.data);
            return state.mergeIn(['courses'], normalizedCourses);
        case SELECT_COURSE:
            return state.setIn(['courses', action.index.toString(), 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn(['courses', action.index.toString(), 'isSelected'], false);
        default:
            return state;
    }
};

export default courseReducer;
