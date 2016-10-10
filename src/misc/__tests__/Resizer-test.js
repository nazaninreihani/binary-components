import React from 'react';
import { shallow } from 'enzyme';
import Resizer from '../Resizer';

describe('<Resizer />', () => {
    it('renders even whithout properties', () => {
        const wrapper = shallow(<Resizer onResize={() => {}} />);
        expect(wrapper.type()).not.toEqual(null);
    });
});
