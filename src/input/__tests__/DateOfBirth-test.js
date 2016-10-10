import React from 'react';
import { render } from 'enzyme';
import DateOfBirth from '../DateOfBirth';

describe('<DateOfBirth />', () => {
    it('renders even whithout properties', () => {
        const wrapper = render(<DateOfBirth />);
        expect(wrapper).not.toEqual(null);
    });
});
