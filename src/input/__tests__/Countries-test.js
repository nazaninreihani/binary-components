import React from 'react';
import { shallow } from 'enzyme';
import Countries from '../Countries';

describe('<Countries />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<Countries />);
        expect(wrapper.type()).toEqual('select');
    });

    it('renders options', () => {
        const residenceList = [
            { value: 'country1' },
            { value: 'country2', disabled: true },
            { value: 'country3' },
        ];
        const wrapper = shallow(<Countries residenceList={residenceList} />);
        expect(wrapper.find('option').length).toEqual(3 + 1);
    });
});
