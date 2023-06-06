import React from 'react';
import {
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductCard from './ProductCard';

var {width} = Dimensions.get('window');

const ProductList = props => {
  const {item} = props;
  return (
    <TouchableOpacity style={{ flexDirection:'column'}} 
    onPress={()=>{
      props.navigation.navigate('Product Details',{item:item})
    }}
    >
        <ProductCard {...item} />
    </TouchableOpacity>
  );
};
export default ProductList;
