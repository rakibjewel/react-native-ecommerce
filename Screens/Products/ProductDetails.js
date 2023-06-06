import React, {useState} from 'react'
import {Dimensions, View, Image, ScrollView} from 'react-native';
import {Button, Card, Text, LeftContent} from 'react-native-paper';

const ProductDetails = (props) => {
  const [item,setItem] = useState(props.route.params.item);
  const base_url = 'https://labonnoprova.com.bd/product_images/';
  return (
    <ScrollView>

    <Card style={{margin:10}}>
      <Card.Cover
        source={{uri: base_url + item.get_product.get_single_images.images}}
        style={{ resizeMode: 'stretch',width:'100%'}}
        />
        <Card.Content>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text variant="titleLarge">
            {item.get_product.name}
          </Text>
          <Text variant="bodyLarge" style={{fontWeight:'bold'}}>{'৳ ' + item.sell_price}</Text>
          <Text style={{textAlign:'justify',letterSpacing:1}}>Product Details: {item.get_product.description}</Text>
          </View>
        </Card.Content>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
        <Card.Actions>
          <Button icon="cart">Add</Button>
        </Card.Actions>
        </View>
  
    </Card>
    <Card style={{margin:5}}>
      <Card.Cover
        source={{uri: base_url + item.get_product.get_single_images.images}}
        style={{ resizeMode: 'stretch',width:'100%'}}
        />
        <Card.Content>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text variant="titleLarge">
            {item.get_product.name}
          </Text>
          <Text variant="bodyLarge" style={{fontWeight:'bold'}}>{'৳ ' + item.sell_price}</Text>
          <Text style={{textAlign:'justify',letterSpacing:1}}>Product Details: {item.get_product.description}</Text>
          </View>
        </Card.Content>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
        <Card.Actions>
          <Button icon="cart">Add</Button>
        </Card.Actions>
        </View>
  
    </Card>
            </ScrollView>

  )
}

export default ProductDetails