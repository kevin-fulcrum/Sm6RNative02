import React from 'react';
import {Text, View} from 'react-native';
import {shallow} from 'enzyme';
import Label from '../Label';

const initialProps = {
  label: 'Genre',
  labelStyle: {color: '#212121', fontSize: 14},
  subLabel: 'Male',
  subLabelStyle: {
    marginTop: 5,
  },
};

const wrapper = shallow(<Label {...initialProps} />);
describe('Label component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should label element in component', () => {
    expect(wrapper.find(View).length).toBe(1);
    expect(wrapper.find(Text).length).toBe(2);
  });
  it('should match props', () => {
    expect(wrapper.props.label).not.toBeNull();
    expect(wrapper.props.labelStyle).not.toBeNull();
    expect(wrapper.props.subLabel).not.toBeNull();
    expect(wrapper.props.subLabelStyle).not.toBeNull();
  });

  it('should match snapshot', () => {
    expect(wrapper.find(Label)).toMatchSnapshot();
  });
});
