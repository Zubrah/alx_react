import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a header row with 2 th elements', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        expect(wrapper.find('tr').length).toEqual(1);
        expect(wrapper.find('th').length).toEqual(2);
    });

    it('renders a default row with 2 td elements', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        expect(wrapper.find('tr').length).toEqual(1);
        expect(wrapper.find('td').length).toEqual(2);
    });

    it('renders a default row with a light gray background color', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        expect(wrapper.find('tr').props().style).toHaveProperty('backgroundColor', '#f5f5f5ab');
    });

    it('renders a header row with a dark gray background color', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        expect(wrapper.find('tr').props().style).toHaveProperty('backgroundColor', '#deb5b545');
    });

    it('renders a header row with th elements with specific styles', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        const thElements = wrapper.find('th');
        expect(thElements.at(0).props().className).toContain('courseListTh');
        expect(thElements.at(1).props().className).toContain('courseListTh');
    });

    it('renders a default row with td elements with specific styles', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        const tdElements = wrapper.find('td');
        expect(tdElements.at(0).props().className).toContain('courseListThTd');
        expect(tdElements.at(1).props().className).toContain('courseListThTd');
    });

    it('renders a header row with the correct text in the th elements', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        const thElements = wrapper.find('th');
        expect(thElements.at(0).text()).toEqual('First Cell');
        expect(thElements.at(1).text()).toEqual('Second Cell');
    });

    it('renders a default row with the correct text in the td elements', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
        const tdElements = wrapper.find('td');
        expect(tdElements.at(0).text()).toEqual('First Cell');
        expect(tdElements.at(1).text()).toEqual('Second Cell');
    });
});
