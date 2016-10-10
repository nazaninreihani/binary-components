import React from 'react';
import { shallow } from 'enzyme';
import ServerErrorMsg from '../ServerErrorMsg';

describe('<ServerErrorMsg />', () => {
    it('does not render when no properties provided', () => {
        const wrapper = shallow(<ServerErrorMsg />);
        expect(wrapper.type()).toEqual(null);
    });

    it('renders untranslated p component', () => {
        const wrapper = shallow(<ServerErrorMsg className="someClass" text="some" />);
        expect(wrapper.find('p').length).toEqual(1);
    });

    it('appends className passed to classes of p', () => {
        const wrapper = shallow(<ServerErrorMsg className="someClass" text="some" />);
        expect(wrapper.prop('className')).toContain('someClass');
    });
});
