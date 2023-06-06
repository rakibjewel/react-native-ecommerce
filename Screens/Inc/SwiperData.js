import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import Swiper from 'react-native-swiper';
const SwiperData = props => {
  const slider_image = props.mySlider;
  const base_url = 'https://labonnoprova.com.bd/slider_image/';
  return (
 <View style={{height:120,margin:5}}>

      <Swiper
      showsButtons={true}
      autoplay={true}
      autoplayTimeout={5}
      bounces={false}>
        {slider_image.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <ImageBackground
                source={{uri: base_url + item.slider_image}} style={styles.image}  imageStyle={{ borderRadius: 6}}>
                  {/* <View style={styles.slider_view}>
                <Text style={styles.slider_text}>{item.slider_title}</Text>
                <Text style={styles.slider_text}>{item.slider_summary}</Text>
                  </View> */}
</ImageBackground>
            </View>
          );
        })}
      </Swiper>  
        </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image:{
    flexGrow:1,
    height:null,
    width:null,
    // alignItems: 'center',
    // justifyContent:'center',
    margin:5,
  },
  slider_view:{
    textAlign: 'justify',
    marginTop:80,
    marginLeft:40,
    width:170,
    backgroundColor:'#rgba(255, 251, 255,0.6)',
    padding:5,
    borderRadius:10,
  },
  slider_text:{
    textAlign: 'justify',
    justifyContent:'space-between',
    fontWeight:'bold',
    color:'black',
  }
});
export default SwiperData;
