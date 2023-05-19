import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
import { bindActionCreators } from 'redux';


export const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index,
});

export const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index,
});

export const fetchCourseSuccess = (data) => ({
    type: FETCH_COURSE_SUCCESS,
    data,
});




export const boundASelectCourse = bindActionCreators(selectCourse);
export const boundUnSelectCourse = bindActionCreators(unSelectCourse);
export const boundFetchCourseSuccess = bindActionCreators(fetchCourseSuccess);

