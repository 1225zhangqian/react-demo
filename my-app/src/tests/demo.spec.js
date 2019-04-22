import React from 'react';
import Routes from '../Routes';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = shallow(<Routes />);
});
