import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import HomePage from '../../presentation/pages/HomeScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {

    return (<Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomePage} />
    </Stack.Navigator>);

};

export default MainNavigator();
