import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Image, View, Text} from 'react-native';

const Header = () => {
  const base_url = 'https://labonnoprova.com.bd/logos/';
  const [logo, setLogo] = useState('');
  useEffect(() => {
    getLogo();
    return () => {
      setLogo('');
    };
  }, []);

  const getLogo = () => {
    axios
      .get('https://labonnoprova.com.bd/api/front-settings')
      .then(response => {
        if (response.status === 200) {
          setLogo(response.data.logo);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View  style={{
            width: 100,
            alignItems:'center',
          }}>
        <Image
        
          style={{
            resizeMode: 'contain',
            height: 50,
            width: 100,
            marginTop:5
          }}
          source={{uri: base_url+logo}} alt='logo'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    // marginTop:150,
    marginBottom: 10,
  },
});

export default Header;
