import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import {StyleSheet, ActivityIndicator, FlatList, View, SafeAreaView, SafeAreaViewBase,Text} from 'react-native';
import ProductList from './ProductList';
import { Searchbar} from 'react-native-paper';
import SwiperData from '../../Screens/Inc/SwiperData';
import Brand from '../Inc/Brand';


const ProductsContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState([]);
  const [brand, setBrand] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    LoadProducts();
    return () => {
      setProducts([]);
      setSlider([]);
      setSlider([]);
    };
  }, []);

const openList=()=>{
  setFocus(true);
}
const iconBlur=()=>{
  setFocus(false);
}

  const LoadProducts = () => {
    setLoading(true);
    axios
      .get('https://labonnoprova.com.bd/api/front-api-get')
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data.all_products);
          setSlider(response.data.slider);
          setBrand(response.data.brand);
          setLoading(false);
        }

        // }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  const searchText = enteredText => {
    axios
      .get(`https://labonnoprova.com.bd/api/product-search/${enteredText}`)
      .then(response => {
        setProducts(response.data.product_for_you);
      });
  };

  if (isLoading == true) {
    return (
      <SafeAreaView  style={styles.whiteOverlay}>
        <ActivityIndicator size={'large'} color="red" />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1}}>
          {focus==true? 
          <View>
      <Searchbar style={{margin:5}}
        placeholder="Search"
        onChangeText={enteredText => searchText(enteredText)}
        onFocus={openList}
        icon="close"
        onIconPress={iconBlur}
        /> 
        </View>
        :
          <View>
          <Searchbar style={{margin:5}}
            placeholder="Search"
            onChangeText={enteredText => searchText(enteredText)}
            onFocus={openList}
            icon="card-search-outline"
            /> 
            </View>
        }
      
        <View>

         <SwiperData mySlider={slider}/>  
        </View>
         <View style={{margin:5}}>
          <FlatList
            data={brand}
            horizontal={true}
            renderItem={({item}) => <Brand item={item} key={item.id} />}
            keyExtractor={item => item.id}
            />
            </View>
         
         <View style={{margin:5,flex:1}}>
          
         <Text style={{padding:10,fontSize:16,fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>Product For You</Text>
         <FlatList
            horizontal={false}
            // contentContainerStyle={{flex: 1}}
            data={products}
            numColumns={2}
            renderItem={({item}) => <ProductList item={item} key={item.id} navigation={props.navigation} />}
            keyExtractor={item => item.id}
            />
      
            </View>
       
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  whiteOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center' 
 },
});

export default ProductsContainer;
