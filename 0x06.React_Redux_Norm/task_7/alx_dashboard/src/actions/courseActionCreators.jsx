import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';


export const selectCourse = (index) => ({
    type: SELECT_COURSE,
    index,
});

export const unSelectCourse = (index) => ({
    type: UNSELECT_COURSE,
    index,
});


// Dispatch and bounding with redux
const { dispatch } = store;

export const boundASelectCourse = bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = bindActionCreators(unSelectCourse, dispatch);

