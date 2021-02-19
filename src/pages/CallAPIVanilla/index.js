import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
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

  useEffect(() => {
    // => Call API Method GET
    // fetch('https://reqres.in/api/users?page=2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // // => Call API Method POST
    // const dataForApi = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('Data Object: ', dataForApi);
    // console.log('Data Stringify: ', JSON.stringify(dataForApi));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForApi),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('Post Response JSON: ', json);
    //   });
  }, []);

  // Function GET data from API
  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  // Function POST data to API
  const postData = () => {
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    // console.log('Data Object: ', dataForApi);
    // console.log('Data Stringify: ', JSON.stringify(dataForApi));

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForApi),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Post Response JSON: ', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textAlign}>Call API with Vanilla JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.textAlign}> Response GET Data</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
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

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textAlign: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});
