/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: 50, height: 50, borderRadius: 50}}
      />
      <Text style={{maxWidth: 50, fontSize: 12}}>{props.title}</Text>
    </View>
  );
};

const DynamicProps = () => {
  return (
    <View>
      <Text>Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story title="People" image="http://placeimg.com/640/480/people" />
          <Story title="Animals" image="http://placeimg.com/640/480/animals" />
          <Story
            title="Architecture"
            image="http://placeimg.com/640/480/arch"
          />
          <Story title="Nature" image="http://placeimg.com/640/480/nature" />
          <Story title="Technology" image="http://placeimg.com/640/480/tech" />
          <Story title="People" image="http://placeimg.com/640/480/people" />
          <Story title="Animals" image="http://placeimg.com/640/480/animals" />
          <Story
            title="Architecture"
            image="http://placeimg.com/640/480/arch"
          />
          <Story title="Nature" image="http://placeimg.com/640/480/nature" />
          <Story title="Technology" image="http://placeimg.com/640/480/tech" />
        </View>
      </ScrollView>
    </View>
  );
};

export default DynamicProps;

const styles = StyleSheet.create({});
