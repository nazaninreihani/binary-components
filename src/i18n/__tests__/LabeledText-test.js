import React from 'react';
import { shallow } from 'enzyme';
import LabeledText from '../LabeledText';

describe('<LabeledText />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<LabeledText />);
        expect(wrapper.type()).not.toEqual(null);
    });
});
