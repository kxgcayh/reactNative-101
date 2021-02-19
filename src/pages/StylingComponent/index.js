/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const StylingComponent = () => {
  return (
    <View>
      <Text style={(styles.text, styles.center)}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#E3000E',
          borderWidth: 1,
          borderColor: '#FEC606',
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={{uri: 'http://placeimg.com/1000/1000/animals'}}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 16}}>
          New Doggos
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 10.000.000,00
        </Text>
        <Text style={{fontSize: 13}}>Jakarta Timur</Text>

        <View
          style={{
            backgroundColor: '#27AE60',
            borderRadius: 25,
            // paddingTop: 12,
            // paddingBottom: 12,
            paddingVertical: 6,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            Buy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StylingComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  center: {
    marginLeft: 153,
  },
});
