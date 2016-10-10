import React from 'react';
import { shallow } from 'enzyme';
import Number from '../Number';

describe('<Number />', () => {
    it('renders NumberPlain when no isProfit prop is set', () => {
        const wrapper = shallow(<Number />);
        expect(wrapper.find('NumberPlain').length).toEqual(1);
    });

    it('renders NumberColored when isProfit is true', () => {
        const wrapper = shallow(<Number isProfit />);
        expect(wrapper.find('NumberColored').length).toEqual(1);
    });
});
