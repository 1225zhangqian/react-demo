import React from 'react';
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import { shallow, mount } from 'enzyme';
import TodoList from '../containers/MyTodoList';
import Detail from '../containers/MyTodoList/detail'
describe('test TodoList', () => {
    let com;
    beforeEach(() => {
        com = shallow(<TodoList />)
    })
    it('render a detail page', () => {
        com.find('button').at(0).simulate('click')
        expect(com.find(Detail).shallow().find('p').length).toBe(1)
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