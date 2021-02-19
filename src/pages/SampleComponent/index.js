import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <Text>Hello</Text>
      <World />
      <Profile />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const World = () => {
  return <Text>World</Text>;
};

class Profile extends Component {
  render() {
    return (
      <View style={{marginTop: 30}}>
        <Image
          source={{uri: 'http://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
        <Text style={{marginTop: 20}}>Ini class component</Text>
      </View>
    );
  }
}

export default SampleComponent;
