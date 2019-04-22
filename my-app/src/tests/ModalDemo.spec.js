import React from 'react';
import { shallow } from 'enzyme';
import ModalDemo from '../containers/ModalDemo/ModalDemo';
describe('test Notification.js', () => {
    let com;
    beforeEach(() => {
        com = shallow(<ModalDemo />)
    })
    it('test for h2', () => {
        const html = com.find('h2').at(0)
        expect(html.text()).toBe('have a try')
    });

    it('test function handleOk', () => {
        const state = {
            visible: false
        }
        com.instance().handleOk();
        // Object.keys(state).forEach(item => {
        //     expect(com.state()[item]).toEqual(state[item])
        // })
        expect(com.state().visible).toEqual(state.visible)
    })

    it('test function showModal', () => {
        const state = {
            visible: true
        }
        com.instance().showModal();
        // Object.keys(state).forEach(item => {
        //     expect(com.state()[item]).toEqual(state[item])
        // })
        expect(com.state().visible).toEqual(state.visible)
    })

})