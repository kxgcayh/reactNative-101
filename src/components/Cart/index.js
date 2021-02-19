import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/images/shopping-cart.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notification}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 5,
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notification: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
