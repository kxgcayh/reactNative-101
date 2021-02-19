import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyAppIllustration from '../../assets/images/myApp_Illustration.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
        molestiae!
      </Text>
      <MyAppIllustration
        width={245}
        height={125}
        style={{marginLeft: 60, marginTop: 20}}
      />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
