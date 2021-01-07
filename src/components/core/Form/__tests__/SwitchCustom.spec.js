import React from 'react';
import {View, Switch} from 'react-native';
import {shallow} from 'enzyme';
import SwitchCustom from '../SwitchCustom';

const toggleSwitch = jest.fn();

const initialProps = {
  value: true,
  onChange: jest.fn(),
  disabled: false,
  trackColor: '#212121',
  iosBackgroundColor: '#ffffff',
  onValueChange: toggleSwitch(),
  thumbColor: '#cccccc',
};

const wrapper = shallow(
  <SwitchCustom {...initialProps} onValueChange={toggleSwitch} />,
);
describe('SwitchCustom component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should SwitchCustom element in component', () => {
    expect(wrapper.find(View).length).toBe(1);
    expect(wrapper.find(Switch).length).toBe(1);
  });
  it('should match props', () => {
    expect(wrapper.props.value).not.toBeNull();
    expect(wrapper.props.onChange).not.toBeNull();
    expect(wrapper.props.disabled).not.toBeNull();
    expect(wrapper.props.trackColor).not.toBeNull();
    expect(wrapper.props.iosBackgroundColor).not.toBeNull();

    expect(wrapper.props.onValueChange).not.toBeNull();
    expect(wrapper.props.thumbColor).not.toBeNull();
  });

  it('should match snapshot', () => {
    expect(wrapper.find(SwitchCustom)).toMatchSnapshot();
  });
});
