import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../routes';
describe('test Notification.js', () => {
    let com;
    beforeEach(() => {
        com = shallow(<Routes />)
    })
    it('test for h2', () => {
        // const html = com.find('h2').at(0)
        // expect(html.text()).toBe('have a try')
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