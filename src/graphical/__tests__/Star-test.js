import React from 'react';
import { shallow } from 'enzyme';
import Star from '../Star';

describe('<Star />', () => {
	it('should render svg', () => {
		const wrapper = shallow(<Star on />);
		expect(wrapper.nodes[0].type).toEqual('svg');
	});

	it('renders different svg content when on and when off', () => {
		const wrapperOn = shallow(<Star on />);
		const wrapperOff = shallow(<Star />);
		expect(wrapperOn.html()).not.toEqual(wrapperOff.html());
	});
});
