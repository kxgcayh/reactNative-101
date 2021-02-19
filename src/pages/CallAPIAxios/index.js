import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  // Function GET data from API
  const getData = () => {
    Axios.get('https://reqres.in/api/users/3')
      .then((result) => {
        console.log(result.data.data);
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('Error: ', err));
  };

  // Function POST data to API
  const postData = () => {
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    Axios.post('https://reqres.in/api/users', dataForApi)
      .then((result) => {
        console.log('Result: ', result);
        setDataJob(result.data);
      })
      .catch((err) => console.log('Error: ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textAlign}>Call API with Vanilla JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.textAlign}> Response GET Data</Text>
      {dataUser.avatar.length > 0 && ( //Condition if avatar is null, avoid the warning message
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text style={styles.textAlign}> Response POST Data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  textAlign: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});
