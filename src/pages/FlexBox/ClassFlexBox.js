/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import avatar from '../../assets/images/avatar.jpg';

class ClassFlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('1. Constructor');
    this.state = {
      application: 100,
    };
  }

  componentDidMount() {
    console.log('3. Component Did Mount');
    setTimeout(() => {
      this.setState({
        application: 'One Hundred',
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log('4. Component Did Update');
  }

  componentWillUnmount() {
    console.log('5. Component Will Unmount');
    console.log('End of Log');
  }

  render() {
    console.log('2. Render');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Home</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Community</Text>
          <Text>Channel</Text>
          <Text>About</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={avatar}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              Kautsar Al Bana
            </Text>
            <Text>My {this.state.application} Application</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ClassFlexBox;
