import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


// Test for rendering without crashing
describe('CourseList component', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />);
    });

    // Test for displaying 5 rows.
    it('renders 5 CourseListRow components', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});
