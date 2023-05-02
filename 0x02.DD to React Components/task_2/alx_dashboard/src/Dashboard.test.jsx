import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';



//Implement test for Dashboard.jsx file
describe('Dashboard', () => {
    it('renders without crashing', () => {
        shallow(<Dashboard />);
    });

    //renders header and footer 
    it('renders a header and a footer', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('Header')).toHaveLength(1);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('renders three sections', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('div.App-body')).toHaveLength(1);
        expect(wrapper.find('div.App-body div.App-body-content')).toHaveLength(1);
        expect(wrapper.find('div.App-body div.App-body-content div.App-body-content-school-info')).toHaveLength(1);
        expect(wrapper.find('div.App-body div.App-body-content div.App-body-content-courses')).toHaveLength(1);
    });

    // It calls a logOut functions and shows the alert
    it('calls logOut function and shows alert when Ctrl+h are pressed', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        const wrapper = shallow(<Dashboard logOut={logOutMock} />);
        wrapper.instance().handleKeyDown({ ctrlKey: true, key: 'h' });
        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();
        alertMock.mockRestore();
    });
}

);