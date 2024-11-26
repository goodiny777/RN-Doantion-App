
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} >
        <NavigationContainer screenOptions={{ header: () => null, headerShown: false }}>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
