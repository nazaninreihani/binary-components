import React from 'react';
import { shallow } from 'enzyme';
import Direction from '../Direction';

describe('<Direction />', () => {
    it('renders without any properties', () => {
        const wrapper = shallow(<Direction />);
        expect(wrapper.find('DirectionNone').length).toEqual(1);
    });

    it('renders when direction is negative', () => {
        const wrapper = shallow(<Direction diff={-123} />);
        expect(wrapper.find('DirectionDown').length).toEqual(1);
    });

    it('renders when direction is positive', () => {
        const wrapper = shallow(<Direction diff={123} />);
        expect(wrapper.find('DirectionUp').length).toEqual(1);
    });
});
