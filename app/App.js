
import React from 'react';
import MainNavigator from './infrastructure/navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
