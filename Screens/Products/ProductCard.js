import React from 'react';
import {Dimensions, View, Image, StyleSheet} from 'react-native';
import {Button, Card, Text, LeftContent} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
const {width} = Dimensions.get('window');

const ProductCard = props => {
  const {sell_price, discount, discount_status, qty, get_product} = props;
  const base_url = 'https://labonnoprova.com.bd/product_images/';

  return (
    <View style={{margin: 5}}>
      <Card>
        <Card.Cover
          source={{uri: base_url + get_product.get_single_images.images}}
          style={{width: 180, height: 100, resizeMode: 'stretch'}}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Card.Content>
            <Text variant="titleLarge">
              {get_product.name.length > 15
                ? get_product.name.substring(0, 8) + '...'
                : get_product.name}
            </Text>
            <Text variant="bodyMedium">{'৳ ' + sell_price}</Text>
          </Card.Content>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Card.Actions>
            <Button icon="cart">Add</Button>
          </Card.Actions>
        </View>
      </Card>
    </View>
  );
};

export default ProductCard;
