import React, {Component} from 'react';
import {StyleSheet, View, Switch} from 'react-native';
import Label from './Label';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default class SwitchCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      enable: false,
    };
  }

  toggleSwitch = () => {
    this.props.onValueChange && this.props.onValueChange();
  };

  render() {
    const {
      children,
      value,
      onChange,
      disabled,
      trackColor,
      iosBackgroundColor,
      onValueChange,
      thumbColor,
      ...props
    } = this.props;
    return (
      <View>
        <Label {...this.props}>
          <Switch
            {...props}
            trackColor={trackColor}
            thumbColor={thumbColor}
            ios_backgroundColor={iosBackgroundColor}
            onValueChange={this.toggleSwitch}
            value={value}
          />
        </Label>
      </View>
    );
  }
}
