import React from 'react';
import { shallow } from 'enzyme';
import TranslatedComponent from '../TranslatedComponent';
import Label from '../Label';
import Legend from '../Legend';
import Option from '../Option';
import P from '../P';
import Th from '../Th';
import Td from '../Td';
import Span from '../Span';

describe('Translated components', () => {
    it('<TranslatedComponent /> can render', () => {
        const wrapper = shallow(<TranslatedComponent />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('<Label /> can render', () => {
        const wrapper = shallow(<Label />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('<Legend /> can render', () => {
        const wrapper = shallow(<Legend />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('<Option /> can render', () => {
        const wrapper = shallow(<Option />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('<P /> can render', () => {
        const wrapper = shallow(<P />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('<Th /> can render', () => {
        const wrapper = shallow(<Th />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('<Td /> can render', () => {
        const wrapper = shallow(<Td />);
        expect(wrapper.type()).not.toEqual(null);
    });

    it('<Span /> can render', () => {
        const wrapper = shallow(<Span />);
        expect(wrapper.type()).not.toEqual(null);
    });
});
