/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{uri: 'http://placeimg.com/1000/1000/animals'}}
        style={styles.productImage}
      />
      <Text style={styles.productName}>New Doggos</Text>
      <Text style={styles.productPrice}>Rp. 10.000.000,00</Text>
      <Text style={styles.location}>Jakarta Timur</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Buy</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  productImage: {width: 188, height: 107, borderRadius: 8},
  productName: {fontSize: 12, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  location: {fontSize: 13},
  buttonWrapper: {
    backgroundColor: '#27AE60',
    borderRadius: 25,
    paddingVertical: 6,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
