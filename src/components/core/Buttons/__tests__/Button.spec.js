import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {shallow} from 'enzyme';
import Button from '../Button';

const initialProps = {
  label: 'Continuar',
  variant: 'primary',
};
const onPress = jest.fn(() => 'I was Pressed');

const wrapper = shallow(<Button {...initialProps} onPress={onPress} />);
describe('Button component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should button element in component', () => {
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
    expect(wrapper.find(Text).length).toBe(1);
  });
  it('should match props', () => {
    expect(wrapper.props.label).not.toBeNull();
    expect(wrapper.props.variant).not.toBeNull();
  });
  it('should render correct text', () => {
    const label = 'Continuar';
    expect(wrapper.find(Text).children().text()).toBe(label);
  });
  it('shoul call onPress', () => {
    const touch = wrapper.find(TouchableOpacity);
    expect(onPress).not.toHaveBeenCalled();
    touch.simulate('press');
    expect(onPress.mock.calls.length).toBe(1);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  it('should match snapshot', () => {
    expect(wrapper.find(Button)).toMatchSnapshot();
  });
});
