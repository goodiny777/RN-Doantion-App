
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { View } from 'react-native';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer screenOptions={{ header: () => null, headerShown: false }}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
