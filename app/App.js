
import React from 'react';
import MainNavigator from './infrastructure/navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer screenOptions={{ header: () => null, headerShown: false }}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
