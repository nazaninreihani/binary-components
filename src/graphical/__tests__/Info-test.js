import React from 'react';
import { shallow } from 'enzyme';
import Info from '../Info';

describe('<Info />', () => {
    it('renders only icon when no tooltip is provided', () => {
        const wrapper = shallow(<Info />);
        expect(wrapper.find('img').length).toEqual(1);
        expect(wrapper.find('.tooltip').length).toEqual(0);
    });

    it('renders tooltip when given', () => {
        const wrapper = shallow(<Info tooltip="some tooltip" />);
        expect(wrapper.find('.tooltip').length).toEqual(1);
    });
});
