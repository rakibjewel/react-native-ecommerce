
import React, { Fragment } from 'react'
import { View,Image,StyleSheet, ImageBackground } from "react-native";
import {Button, Card, Text, LeftContent,Surface} from 'react-native-paper';

const Brand = (props) => {
  const {name, brand_image, isShow_icon, qty, id} = props.item;
  const base_url = 'https://labonnoprova.com.bd/brand_images/';
  return (
   <View >
     <Surface style={styles.surface} elevation={1}>
      {isShow_icon? 
      <ImageBackground source={{uri:base_url+brand_image}}  style={{width:100,height:60,borderRadius:5,resizeMode:'contain'}}>
        <Text style={{marginTop:52,height:20,width:100,textAlign:'center',fontWeight:'bold'}}>{name}</Text>
        </ImageBackground>
      
      :''}
 </Surface>
   
    

  </View>
  )
}
const styles = StyleSheet.create({
    surface: {
      padding: 8,
      height: 100,
      width: 120,
      alignItems: 'center',
      justifyContent: 'center',
      margin:5,
      borderRadius:15
    },
  });
export default Brand