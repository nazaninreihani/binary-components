import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';
import InputGroup from '../InputGroup';

describe('<InputGroup />', () => {
    it('renders with no properties', () => {
        const wrapper = shallow(<InputGroup />);
        expect(wrapper.type()).toEqual('fieldset');
    });

    it('renders label if provided', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <InputGroup label="someLabel" />
            </IntlProvider>
        );
        expect(wrapper.text()).toContain('someLabel');
    });

    it('translates placeholder if provided', () => {
        const wrapper = render(
            <IntlProvider locale="en">
                <InputGroup placeholder="somePlaceholder" />
            </IntlProvider>
        );
        expect(wrapper.find('input').prop('placeholder')).toEqual('somePlaceholder');
    });
});
