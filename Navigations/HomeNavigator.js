import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductsContainer from '../Screens/Products/ProductsContainer';
import ProductDetails from '../Screens/Products/ProductDetails';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductsContainer} 
        options={{
          headerShown:false,
        }}
        />
<Stack.Screen name="Product Details" component={ProductDetails}
options={{headerShown:true}}
/>
      </Stack.Navigator>
    );
  }
const HomeNavigator = () => {
  return (
   <MyStack />
  )
}

export default HomeNavigator