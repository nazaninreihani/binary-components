import React from 'react';
import { shallow } from 'enzyme';
import Direction from '../Direction';

describe('<Direction />', () => {
    it('renders without any properties', () => {
        const wrapper = shallow(<Direction />);
        expect(wrapper.html()).toContain('fill:grey');
    });

    it('renders when direction is negative', () => {
        const wrapper = shallow(<Direction diff={-123} />);
        expect(wrapper.html()).toContain('fill:red');
    });

    it('renders when direction is positive', () => {
        const wrapper = shallow(<Direction diff={123} />);
        expect(wrapper.html()).toContain('fill:green');
    });
});
