import React from 'react'
import { shallow, mount } from 'enzyme'
import Footer from './Footer'
import DashboardContext from '../pages/Dashboard/DashboardContext'

describe('Footer', () => {
    it('renders without crashing', () => {
        shallow(<Footer />)
    })

    it('displays the correct footer copy', () => {
        const wrapper = shallow(<Footer />)
        const footerCopy = wrapper.find('.button18').first().text()
        expect(footerCopy).toEqual('All rights reserved')
    })

    it('displays the current year', () => {
        const wrapper = shallow(<Footer />)
        const currentYear = new Date().getFullYear().toString()
        const yearText = wrapper.find('.button18').last().text()
        expect(yearText).toEqual(` © ${currentYear}`)
    })

    it('does not display link when user is logged out', () => {
        const wrapper = mount(
            <DashboardContext.Provider value={{ loggedIn: false }}>
                <Footer />
            </DashboardContext.Provider>
        )
        expect(wrapper.find('.contactLink').exists()).toBe(false)
    })

    it('displays link when user is logged in', () => {
        const wrapper = mount(
            <DashboardContext.Provider value={{ loggedIn: true }}>
                <Footer />
            </DashboardContext.Provider>
        )
        const link = wrapper.find('.contactLink')
        expect(link.exists()).toBe(true)
        expect(link.text()).toEqual('Contact us')
    })
})
