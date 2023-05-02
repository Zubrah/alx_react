import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


// test for CourseList Row with props
describe('CourseListRow', () => {

    // Test for isHeader is true
    describe('when isHeader is true', () => {
        it('should render one cell with colspan = 2 when textSecondCell does not exist', () => {
            const wrapper = shallow(
                <CourseListRow isHeader={true} textFirstCell="Header" />
            );
            expect(wrapper.find('th').props().colSpan).toEqual(2);
        });

        it('should render two cells when textSecondCell is present', () => {
            const wrapper = shallow(
                <CourseListRow
                    isHeader={true}
                    textFirstCell="Header 1"
                    textSecondCell="Header 2"
                />
            );
            expect(wrapper.find('th').length).toEqual(2);
        });
    });

    // Test for Header when it's false.
    describe('when isHeader is false', () => {
        it('should render two td elements within a tr element', () => {
            const wrapper = shallow(
                <CourseListRow
                    isHeader={false}
                    textFirstCell="First cell"
                    textSecondCell="Second cell"
                />
            );
            expect(wrapper.find('tr').length).toEqual(1);
            expect(wrapper.find('td').length).toEqual(2);
        });
    });
});
