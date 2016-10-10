import React from 'react';
import { shallow } from 'enzyme';
import DirectionAndValue from '../DirectionAndValue';

describe('<DirectionAndValue />', () => {
    it('renders a Direction and NumberPlain components', () => {
        const wrapper = shallow(<DirectionAndValue />);
        expect(wrapper.find('Direction').length).toEqual(1);
        expect(wrapper.find('NumberPlain').length).toEqual(1);
    });
});
