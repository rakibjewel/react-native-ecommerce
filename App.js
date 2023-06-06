import React from 'react';
import Header from './Screens/Inc/Header';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Navigations/Main';
const App = () => {
  return (
    <NavigationContainer>
        <Header />
        <Main />
    </NavigationContainer>
  );
};

export default App;
