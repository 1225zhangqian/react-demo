import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import RouterDemo from '../containers/RouterDemo/RouterDemo';
describe('test RouterDemo', () => {
    let com;
    beforeEach(() => {
        com = shallow(<RouterDemo />)
    })
    it('test for h1', () => {
        const html = com.find('h1').at(0)
        const html2 = com.find('h1').at(1)
        const html3 = com.find('h1').last()
        expect(html.text()).toBe('test')
        expect(html2.text()).toBe('test-2')
        expect(html3.text()).toBe('test-last')
    });
    it('renders three h1', () => {
        expect(com.find('h1').length).toBe(3);
    });
    it('test function handleOk', () => {
        // const state = {
        //     visible: false
        // }
        // com.instance().handleOk();
        // // Object.keys(state).forEach(item => {
        // //     expect(com.state()[item]).toEqual(state[item])
        // // })
        // expect(com.state().visible).toEqual(state.visible)
    })
})