import React from 'react';
import { shallow } from 'enzyme';
import NumericInput from '../NumericInput';

describe('<NumericInput />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<NumericInput />);
        expect(wrapper.type()).toEqual('div');
    });

    it('when valueList is given, datalist is rendered for auto complete', () => {
        const wrapper = shallow(<NumericInput valueList={[1, 2, 3]} />);
        expect(wrapper.find('datalist').length).toEqual(1);
    });

    it('when no valueList provided, no datalist is rendered', () => {
        const wrapper = shallow(<NumericInput />);
        expect(wrapper.find('datalist').length).toEqual(0);
    });

    it('clicking the up button changes the value', () => {
        const onButtonClick = jest.fn();
        const wrapper = shallow(<NumericInput onChange={onButtonClick} defaultValue={123.123} />);
        wrapper.find('.step-up').simulate('click');
        expect(onButtonClick).toHaveBeenCalled();
    });

    it('clicking the down button changes the value', () => {
        const onButtonClick = jest.fn();
        const wrapper = shallow(<NumericInput onChange={onButtonClick} defaultValue={123.123} />);
        wrapper.find('.step-down').simulate('click');
        expect(onButtonClick).toHaveBeenCalled();
    });
});
