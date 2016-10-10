import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('renders TranslatedComponent', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('TranslatedComponent').length).toEqual(1);
    });
});
