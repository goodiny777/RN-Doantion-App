import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import HomePage from '../pages/HomePage';

const Stack = createStackNavigator();

const MainNavigator = () => {

    return (<Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomePage} />
    </Stack.Navigator>);

};

export default MainNavigator;
