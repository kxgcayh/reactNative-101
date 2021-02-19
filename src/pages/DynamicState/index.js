/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Plus = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={{marginRight: 10, flex: 1}}>
      <Text style={styles.textTitle}>{number}</Text>
      <Button title="plus" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class Minus extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View style={{marginRight: 10, flex: 1}}>
        <Text style={styles.textTitle}>{this.state.number}</Text>
        <Button
          title="minus"
          onPress={() => this.setState({number: this.state.number - 1})}
        />
      </View>
    );
  }
}

const DynamicState = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Plus />
        <Minus />
      </View>
    </View>
  );
};

export default DynamicState;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
